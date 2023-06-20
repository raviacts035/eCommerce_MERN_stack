import { useState } from "react";
import { redirect } from "react-router-dom";

const NewCollection=()=>{
    const [name,setName]=useState('');
    
    async function handleSubmit(e){
        e.preventDefault();
        const resp= await fetch(`http://127.0.0.1:5000/api/collection/create/new`,{
            method:"POST",
            body: {
                name:name
            },
            credentials: "include",
            mode: "cors",
        })
        let data = resp.json()
        console.log(data)
        //redirecting on sucess
        if(data?.body?.success) redirect("/")
    }
    return (
        <section>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <a className="border-1 p-2 underline text-lg" href="/admin/dashbord">
                    <div>Back To Dashbord</div>
                </a>
                <a className="border-1 p-2 bg-orange-500 rounded shadow-xl" href="/admin/new/collection">
                    <button>New Collection</button>
                </a>
            </nav>
            <div>
                <h2>Create New Collection</h2>
                <div>
                    <form>
                        <h3>Collection name</h3>
                        <input type="text" onChange={e=>{setName(e.target.value)}} placeholder="name" value={name}/>
                        <input type="submit" onClick={e=>{handleSubmit(e)}} value="Create New"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewCollection