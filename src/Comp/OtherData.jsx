//compunent for showing extra user data.
const OtherData=({user , update})=>
{
    return(
        <>
            <div style={{border: "3px solid", borderSpacing:"3px ", width:"95%" , position:"center"}}>
            Street: <input type="text" defaultValue={user.address.street} onChange={(e)=>update({...user,address:{...user.address, street: e.target.value} })}/><br/>
            City: <input type="text" defaultValue={user.address.city} onChange={(e)=>update({...user,address:{...user.address, city: e.target.value} })}/><br/>
            Zip Code: <input type="number" defaultValue={Number.parseInt(user.address.zipcode)} onChange={(e)=>update({...user,address:{...user.address, zipcode: e.target.value} })}/><br/>
            </div>
        </>
    )
}
export default OtherData;