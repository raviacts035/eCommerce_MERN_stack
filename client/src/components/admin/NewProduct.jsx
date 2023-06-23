import { useState } from "react";
import { redirect } from "react-router-dom";

const NewProduct=()=>{
    const [name,setName]=useState('');
    
    async function handleSubmit(e){
        e.preventDefault();

        const ProductData=new FormData()
        ProductData.set("name",name);

        const resp= await fetch(`http://127.0.0.1:5000/api/products/add/new`,{
            method:"POST",
            body: ProductData,
            credentials: "include",
            mode: "cors",
        })
        const data=resp?.product;
        // redirect if product Successfully created 
    }
    return (
        <section>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <a className="border-1 p-2 underline text-lg" href="/admin/dashbord">
                    <div>Back To Dashbord</div>
                </a>
                <button>Cancel</button>
            </nav>
            <div>
                <h2>Create New Product</h2>
                <div>
                    <form>
                        <h3>Product name</h3>
                        <input type="text" onChange={e=>{setName(e.target.value)}} placeholder="name" value={name}/>
                        <input type="submit" onClick={e=>{handleSubmit(e)}} value="Create New"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewProduct