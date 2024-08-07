import { useState ,useEffect } from "react";
import OtherData from "./OtherData";

//The User Component handle the data of a single user

const UserComp = ({ user , dalete ,update , tp }) => {

    const [showAdd, setShowAdd] = useState(false); // show the extra data
    const [newUser, setNewUser] = useState(user); // holder for the updated user data.

    //init user component
    useEffect(()=>{
        setNewUser(user);
      },[])

    // delete this user form data base.
    function DeleteMe()
    {
        dalete(user.id);
    }

    // update user data in base data base.
    function UpdateMe()
    {
        update(user.id, newUser);
    }
    
    return (
        <>
            <a onClick={()=>tp(user)}>ID:</a>{user.id}<br />
            Name: <input type="text" defaultValue={user.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} /><br />
            Email: <input type="text" defaultValue={user.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} /><br />
            <button onClick={() => setShowAdd(!showAdd)}>Other Data</button>
            <button onClick={UpdateMe}>Update</button>
            <button onClick={DeleteMe}>Delete</button>

            {showAdd && <div>
                <br /><OtherData user={user} update={setNewUser} /><br />
            </div>}
            <br />
        </>
    )
}
export default UserComp;