import { useState } from "react";

const AddNewUser = ({add, cancel})=>
{
    const [newUser, setNewUser] = useState(
    {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        }
    },);

    return(
        <>
        <div>
        Name: <input type="text" defaultValue={"Full Name"} onChange={(e) => setNewUser({...newUser, name: e.target.value})} /><br />
        Email: <input type="text" defaultValue={"Your@Email.com"} onChange={(e) => setNewUser({...newUser, email: e.target.value})} /><br />

        <button onClick={()=>{cancel()}}>Cancel</button>
        <button onClick={()=>add(newUser)}>Add</button>
        </div>
        </>
    )
}
export default AddNewUser;