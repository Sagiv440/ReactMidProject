
const PostsView=({user, posts , select })=>
{
    return(
        <>
        Posts - User: {user.name}
        <button onClick={()=>select("Add")}>Add</button><br/>
        <ul>
        {
            posts.map((post)=>
            {
                return(<div key={post.id} style={{border:"3px solid", width:"90%"}}>
                    Title: {post.title} <br/><br/>
                    Body: {post.body}
                </div>)
            }
            )
        }
        </ul>
        </>
    )
}
export default PostsView;