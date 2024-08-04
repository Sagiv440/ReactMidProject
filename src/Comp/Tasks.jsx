import { useState, useEffect } from "react";

const Tasks=({user, tasks , mark})=>
{
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        setTodos([...tasks])
    },[user])

    const Mark=(task , state)=>
    {
        let tsk = {...task, completed: state};
        let nTodos = [...todos];
        for(let i = 0; i < nTodos.length; i++)
            {
              if(nTodos[i].id == task.id)
              {
                nTodos[i] = tsk; 
                break;
              }
            }
        setTodos(nTodos);
        mark(task.id, tsk);
    }
    return(
        <>
        User: {user.name}
        <button>Add</button><br/>
        <ul>
        {
            todos.map((task)=>
            {
                return(<div style={{border:"3px solid", width:"90%"}}>
                    Title: {task.title} <br/>
                    Completed: {task.completed? " true ": " false "}
                    {!task.completed && <button onClick={()=>Mark(task, true)}>Mark Completed</button>}
                </div>)
            }
            )
        }
        </ul>
        </>
    )
}
export default Tasks;