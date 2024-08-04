import { useState ,useEffect } from "react";
import OtherData from "./OtherData";

const UserComp = ({ user , dalete ,update , tp }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [newUser, setNewUser] = useState();

    useEffect(()=>{
        setNewUser(user);
      },[])

    function DeleteMe()
    {
        dalete(user.id);
    }

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
                <br /><OtherData other={user.address} /><br />
            </div>}
            <br />
        </>
    )
}
export default UserComp;