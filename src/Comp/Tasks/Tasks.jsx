import { useState } from "react";
import TasksView from "./TasksView";
import TaskAdd from "./TaskAdd";

//Task component for handling the user tasks
const Tasks =({user, tasks , mark})=>
{
    const [state, setState]  = useState("View") // selector between add new tasks and view tasks.

    return(
        <>
        {state=="View" && <TasksView user={user} tasks={tasks} mark={mark} select={setState}/>}
        {state=="Add" && <TaskAdd user={user} add={mark} select={setState}/>}
        </>
    )
}
export default Tasks;