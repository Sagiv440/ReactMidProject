import { useState } from "react";

const TaskAdd = ({user , add, select})=>
{
   const [todo, setTodo] = useState(
      {
         userId: user.id,
         id: 0,
         title: "",
         completed: false
       }
   );

   const add_New=()=>
   {
      setTodo({...todo,userId: user.id})
      add(todo, true);
      select("View");
   }

   return (
      <>
      New Todo - {user.name}<br/>
      <div style={{border:"3px solid", width:"90%"}}>
         Title: <input type="text" onChange={(e)=> setTodo({...todo,title: e.target.value})}/><br/>

         <button onClick={()=>select("View")}>Cancel</button>
         <button onClick={()=> add_New()}>Add</button><br/>
      </div>
      </>
   )
}
export default TaskAdd;