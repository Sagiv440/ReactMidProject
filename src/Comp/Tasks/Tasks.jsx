import { useState } from "react";
import TasksView from "./TasksView";
import TaskAdd from "./TaskAdd";

const Tasks =({user, tasks , mark})=>
{
    const [state, setState]  = useState("View")

    return(
        <>
        {state=="View" && <TasksView user={user} tasks={tasks} mark={mark} select={setState}/>}
        {state=="Add" && <TaskAdd user={user} add={mark} select={setState}/>}
        </>
    )
}
export default Tasks;