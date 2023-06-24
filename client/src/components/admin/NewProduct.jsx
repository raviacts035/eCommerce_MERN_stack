import { useState } from "react";
import { useParams } from "react-router-dom";

const NewProduct=()=>{
    const [name,setName]=useState('');
    // name, price, discription, stock, collectionId;
    const [price, setPrice]=useState(0);
    const [discription,setDiscription]=useState('');
    const [stock,setStock]=useState(0);
    const {id:collectionId}=useParams();

    let files;
    const handleFiles=(e)=>{
        files=e.target.files
        console.log(files)
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        if (!collectionId) return

        const productForm=new FormData();
        productForm.set("name", name);
        productForm.set('price', price);
        productForm.set('discription',discription);
        productForm.set('stock', stock);
        productForm.set('collectionId',collectionId);
        productForm.set('files',files)
        const resp= await fetch(`http://127.0.0.1:5000/api/products/add/new`,{
            method:"POST",
            body: productForm,
            credentials: "include",
            mode: "cors",
        })
        const data=resp?.product;
        // redirect if product Successfully created 
        console.log(resp)
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
                        <div>
                            <h3>Product name</h3>
                            <input type="text" onChange={e=>{setName(e.target.value)}} placeholder="name" id="name" value={name} required/>
                        </div>
                        <div>
                            <h3>Price in rupees</h3>
                        <input type='number' onChange={e=>{setPrice(e.target.value)}} id="Price" placeholder="Price" required/>
                        </div>
                        <div>
                            <h3>Product Discription</h3>
                        <input type="text" onChange={e=>{setDiscription(e.target.value)}} id="Discription" placeholder="Product Discription..." required/>
                        </div>
                        <div>
                            <h3>Stock </h3>
                        <input type="number" onChange={e=>{setStock(e.target.value)}} id="stock" placeholder='stock' required/>
                        </div>
                        <div>
                            <h3>Collection ID</h3>
                        <input type="text" id="id" value={collectionId} readOnly/>
                        </div>
                        {!collectionId && <div>Collection Id is missing!</div>}
                        <div>
                            <h3>Product Images's (4)</h3>
                            <input type="file" name="photos" onChange={e=>{handleFiles(e)}} id="files" required multiple/>
                        </div>
                        <input type="submit" onClick={e=>{handleSubmit(e)}} value="Create New"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewProduct