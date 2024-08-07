import { useState, useEffect } from "react";

const TasksView=({user, tasks , mark , select})=>
{
    const [todos, setTodos] = useState([]);
    const [addShow, setAddShow] = useState(false);

    useEffect(()=>{
       console.log(tasks);
    },[tasks])

    const Mark=(task , state)=>
    {
        let tsk = {...task, completed: state};
        let nTodos = [...tasks];
        for(let i = 0; i < nTodos.length; i++)
            {
              if(nTodos[i].id == task.id)
              {
                nTodos[i] = tsk; 
                break;
              }
            }
        setTodos(nTodos);
        mark(tsk);
    }
    return(
        <>
        Todos - User: {user.name}
        <button onClick={()=>select("Add")}>Add</button><br/>
        <ul>
        {
            tasks.map((task)=>
            {
                return(<div key={task.id} style={{border:"3px solid", width:"90%"}}>
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
export default TasksView;