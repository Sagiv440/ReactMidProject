import { useState } from "react";

const PostsAdd =({user , add , select})=>
{
    const [post, setPost] = useState(
        {
            userId: user.id,
            id: 0,
            title: "",
            body: ""
          }
    );

    const add_New=()=>
        {
           add(post);
           select("View");
        }

    return(
        <>
        Title: <input type="text" onChange={(e)=> setPost({...post,title: e.target.value})}/><br/>
        Body: <input type="text" onChange={(e)=> setPost({...post,body: e.target.value})}/><br/>

            <button onClick={()=>select("View")}>Cancel</button>
            <button onClick={()=>add_New()}>Add</button><br/>
        </>
    )
}
export default PostsAdd;