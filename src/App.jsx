import { useState , useEffect , useMemo } from 'react';
import './App.css';
import UserComp from './Comp/User';
import { getAll, updateItem } from './utils';
import AddNewUser from './Comp/AddNewUser';
import Tasks from './Comp/Tasks';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [state, setState] = useState("");
  const [search, setSearch] = useState("");

  const [curUser, setCurUser] = useState();
  const [curTodos,setCurTodos] = useState([]);

  useEffect(()=>{
    const getUsers = async()=>{
        const {data} = await getAll(USERS_URL);
        setUsers(data);
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
    setUsers(NewUsers);
  }

    const AddUser=(user)=>
    {
      let Id = 0;
      for(let i = 0; i < users.length; i++)
      {
        if(users[i].id > Id)
        {
          Id = users[i].id;
        }
      }
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

    const UpdateTask=(id, task)=>
      {
        let tss = [...todos];
        for(let i = 0; i < tss.length; i++)
        {
          if(tss[i].id == id)
          {
            tss[i] = task; 
            break;
          }
        }
        updateItem(TODOS_URL, id, task)
        
        setTodos(tss);

        setCurTodos(todos.filter((e) => e.userId == task.userId));
      }

    const TaskAndPosts=(user)=>
    {
      setCurUser(user);
      setCurTodos(todos.filter((e) => e.userId == user.id));
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

    const SidePage =()=>
    {
      switch(state)
      {
        case "AddNew":
          return(<AddNewUser key={'1'} add={AddUser} cancel={Cancel}/>);
        
        case "TasksAndPosts":
          return(<><Tasks key={'2'} user={curUser} tasks={curTodos} mark={UpdateTask}/></>)
          default:
          return(<></>);
      }
      return(<></>)
    }


  return (
    <>
    <div style={{border:"3px solid"}}>
    Search <input type="text" onChange={(e)=>setSearch(e.target.value)}/> <button onClick={() => setState("AddNew")} >Add</button><br/>

        <ul>
          {
            serchedUsers.map((user)=>{
              return(<div class={checkTodo(user.id)} style={{ border: "3px solid", width: "95%" }}>
                <UserComp key={user.id} user={ user } dalete={ DeleteUser } update={ UpdateUser } tp={TaskAndPosts}/>
              </div>)
            })
          }
        </ul>
      </div>
      <div style={{border:"3px solid"}}>
      {SidePage()}
      </div>
    </>
  )
}

export default App
