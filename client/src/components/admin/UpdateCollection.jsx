import { useState } from "react"

const UpdateCollection=({name, id})=>{
    const [newName,setNewName]=useState(name)
    return (
        <section>
            <p>Edit Collection</p>
            <div>
                <p>Collection Name</p>
                <input onChange={eve=>setNewName(eve.target.value)} type="text" value={newName}/>
            </div>
            <div>
                <button onClick={eve=>{}}>Update</button>
            </div>
        </section>
    )
}