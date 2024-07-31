const User=({user})=>
{
    return(
        <>
            <div style={{border: "3px solid"}}>
                ID: {user.id}<br/>
                Name: <input type="text" defaultValue={user.name}/><br/>
                Email: <input type="text" defaultValue={user.email}/><br/>
                <button>Other Data</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </>
    )
}
export default User;