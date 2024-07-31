import { useState , useEffect } from 'react';
import './App.css';
import User from './Comp/User';
import { getAll } from './utils';
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

  return (
    <>
    <div style={{border:"3px solid"}}>
    Search <input type="text"/> <button>Add</button><br/>
        <ul>
          {
            users.map((user)=>{
              return(<User key={user.id} user={ user }/>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
