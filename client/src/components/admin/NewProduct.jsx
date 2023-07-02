import { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";
import { domain_url} from '../../utils/index'
import PostRequest from "../../utils/PostRequest";

const NewProduct=()=>{
    const [name,setName]=useState('');
    const [price, setPrice]=useState(0);
    const [discription,setDiscription]=useState('');
    const [stock,setStock]=useState(0);
    const {id:collectionId}=useParams();
    const [data,setData]=useState();
    const token=useAuthToken();

    let files;
    const handleFiles=(e)=>{
        files=e.target.files
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
        for (let index=0; index< files['length'];index++){
            // console.log(files[index])
            productForm.set(files[index].name,files[index])
        }
        PostRequest(domain_url+`/api/products/add/new`,productForm,token,setData)
        // redirect if product Successfully created
        if(data?.success) redirect('/admin/dashbord/collection')
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
                            <input type="text" onChange={e=>{setName(e.target.value)}} placeholder="name" id="name" value={name}/>
                        </div>
                        <div>
                            <h3>Price in rupees</h3>
                        <input type='number' onChange={e=>{setPrice(e.target.value)}} id="Price" placeholder="Price"/>
                        </div>
                        <div>
                            <h3>Product Discription</h3>
                        <input type="text" onChange={e=>{setDiscription(e.target.value)}} id="Discription" placeholder="Product Discription..."/>
                        </div>
                        <div>
                            <h3>Stock </h3>
                        <input type="number" onChange={e=>{setStock(e.target.value)}} id="stock" placeholder='stock'/>
                        </div>
                        <div>
                            <h3>Collection ID</h3>
                        <input type="text" id="id" value={collectionId} readOnly/>
                        </div>
                        {!collectionId && <div>Collection Id is missing!</div>}
                        <div>
                            <h3>Product Images's (4)</h3>
                            <input type="file" multiple name="photos" onChange={e=>{handleFiles(e)}} id="files" required/>
                        </div>
                        <button  type="submit" onClick={e=>{handleSubmit(e)}} className="duration-400 hover:bg-yellow-400 hover:text-white px-4 py-2 rounded-[50px] border-2">Create New</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewProduct