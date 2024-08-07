import { useState , useEffect , useMemo } from 'react';
import './App.css';
import UserComp from './Comp/User';
import { getAll, addItem, updateItem , NewId } from './utils';
import AddNewUser from './Comp/AddNewUser';
import Tasks from './Comp/Tasks/Tasks';
import Posts from './Comp/Posts/Posts';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [state, setState] = useState("");
  const [search, setSearch] = useState("");

  const [curUser, setCurUser] = useState({});

  const curTodos = useMemo(()=>{
    return todos.filter((e) => e.userId == curUser.id)
  })
  const curPosts = useMemo(()=>{
    return posts.filter((e) => e.userId == curUser.id)
  })


  useEffect(()=>{
    const getUsers = async()=>{
        const {data} = await getAll(USERS_URL);
        setUsers(data);
        setCurUser(data[0]);
    }
    const getPosts = async()=>{
      const {data} = await getAll(POSTS_URL);
      setPosts(data);
    }
    const getTodos = async()=>{
      const {data} = await getAll(TODOS_URL);
      setTodos(data);
    }
    getUsers();
    getPosts();
    getTodos();
  },[])

  const serchedUsers = useMemo(()=> 
    users.filter((user) => {
    return (user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
  }),[search, users])

  const DeleteUser=(id)=>
  {
    const NewUsers = users.filter((e)=>e.id !== id);
    const NewPosts = posts.filter((e)=>e.userId !== id);
    const NewTodos = todos.filter((e)=>e.userId !== id);

    setUsers(NewUsers);
    setTodos(NewTodos);
    setPosts(NewPosts);

    setState("");
  }

    const AddUser=(user)=>
    {
      let Id = NewId(users);
      let Nuser = {...user,id: Id+1};

      setUsers([...users, Nuser]);
      setState("");
    }

    const Cancel =()=>
    {
      setState("");
    }

    const UpdateUser=(id, user)=>
    {
      let uss = [...users];
      for(let i = 0; i < uss.length; i++)
      {
        if(uss[i].id == id)
        {
          uss[i] = user; 
          break;
        }
      }
      updateItem(USERS_URL, id, user)
      setUsers(uss);
    }

    const UpdateTask=(task, add=false)=>
      {
        let tss = [...todos];
        let tsk = {...task};
        if(!add)
        {
          for(let i = 0; i < tss.length; i++)
          {
            if(tss[i].id == tsk.id)
            {
              tss[i] = tsk; 
              break;
            }
          }
          setTodos(tss);
          updateItem(TODOS_URL, tsk.id, tsk);
        }
        else
        {
          tsk = {...tsk,id: NewId(todos)};
          setTodos([...tss, tsk]);
          addItem(TODOS_URL, tsk);
        }
      }

    const AddPost=(post)=>
      {
        let pst = {...post};
        pst = {...pst,id: NewId(posts)};
        setPosts([...posts, pst]);
        addItem(POSTS_URL, pst);
      }

    const TaskAndPosts=(user)=>
    {
      setCurUser(user);
      setState("TasksAndPosts")
    }


    function checkTodo(id)
    {
        const mytodos = todos.filter((e) => e.userId == id)
        for(let i=0 ; i < mytodos.length ; i++)
        {
          if(!mytodos[i].completed)
          {
            return("Red");
          }
        }
        return("Green")
    }


  return (
    <>
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <div style={{border:"3px solid"}}>
      Search <input type="text" onChange={(e)=>setSearch(e.target.value)}/> <button onClick={() => setState("AddNew")} >Add</button><br/>

          <ul>
            {
              serchedUsers.map((user)=>{
                return(<div class={checkTodo(user.id)} style={{ border: "3px solid"}}>
                  <UserComp key={user.id} user={ user } dalete={ DeleteUser } update={ UpdateUser } tp={TaskAndPosts}/>
                </div>)
              })
            }
          </ul>
        </div>
        {state != "" && <div style={{border:"3px solid" ,width: "50%"}}>
          {state=="TasksAndPosts" && <>
            <Tasks user={curUser} tasks={curTodos} mark={UpdateTask}/><br/>
            <Posts user={curUser} posts={curPosts} add={AddPost}/>
          </>}
          {state=="AddNew" &&
          <AddNewUser key={1} add={AddUser} cancel={Cancel}/>
          }
        </div>}
      </div>
    </>
  )
}

export default App
