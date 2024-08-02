
const OtherData=({other})=>
{
    return(
        <>
            <div style={{border: "3px solid", borderSpacing:"3px ", width:"95%" , position:"center"}}>
            Street: <input type="text" defaultValue={other.street}/><br/>
            City: <input type="text" defaultValue={other.city}/><br/>
            Zip Code: <input type="number" defaultValue={Number.parseInt(other.zipcode)}/><br/>
            </div>
        </>
    )
}
export default OtherData;