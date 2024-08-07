import { useState } from "react";
import PostsView from "./PostsView";
import PostsAdd from "./PostAdd";

const Posts =({user, posts, add})=>
{
    const [Pstate, setPState]  = useState("View")

    return(
        <>
        {Pstate=="View" && <PostsView user={user} posts={posts} select={setPState}/>}
        {Pstate=="Add" && <PostsAdd user={user} add={add} select={setPState}/>}
        </>
    )
}
export default Posts;