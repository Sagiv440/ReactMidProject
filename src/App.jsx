import { useState , useEffect } from 'react';
import './App.css';
import UserComp from './Comp/User';
import { getAll, updateItem } from './utils';
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async()=>{
        const {data} = await getAll(USERS_URL);
        setUsers(data);
    }
    getUsers()
  },[])

  const DeleteUser=(id)=>
  {
    const NewUsers = users.filter((e)=>e.id !== id);
    setUsers(NewUsers);
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

  return (
    <>
    <div style={{border:"3px solid"}}>
    Search <input type="text"/> <button>Add</button><br/>

        <ul>
          {
            users.map((user)=>{
              return(<div key={user.id}><UserComp user={ user } dalete={ DeleteUser } update={UpdateUser}/></div>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
