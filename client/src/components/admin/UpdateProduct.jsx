import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";
import { domain_url} from '../../utils/index'
import PostRequest from "../../utils/PostRequest";

const UpdateProduct=({name, price, stock, discription})=>{
    // console.log(name)
    const [newName,setNewName]=useState(name);
    const [newPrice, setNewPrice]=useState(price);
    const [newDiscription,setNewDiscription]=useState(discription);
    const [newStock,setNewStock]=useState(stock);
    const [data,setData]=useState();
    const {id:collectionId}=useParams();
    const token=useAuthToken();

    let files=[];
    const handleFiles=(e)=>{
        files=e.target.files
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        if (!collectionId || !newName || !newDiscription || !newStock || !newPrice) return

        const productForm=new FormData();
        productForm.set("name", newName);
        productForm.set('price', newPrice);
        productForm.set('discription',newDiscription);
        productForm.set('stock', newStock);
        productForm.set('collectionId',collectionId);
        for (let index=0; index< files['length'];index++){
            // console.log(files[index])
            productForm.set(files[index].name,files[index])
        }
        PostRequest(domain_url+`/api/products/update/${collectionId}`,productForm,token,setData)

        console.log(data)
    }
    
    return (
        <section>
            <p>Edit Product</p>
            <p>Page Under Construction</p>
            <div>
                <h2>Update Product</h2>
                <div>
                    <form>
                        <div>
                            <h3>Product name</h3>
                            <input type="text" onChange={e=>{setNewName(e.target.value)}} placeholder="name" id="name" value={newName}/>
                        </div>
                        <div>
                            <h3>Price in rupees</h3>
                        <input type='number' onChange={e=>{setNewPrice(e.target.value)}} value={newPrice} id="Price" placeholder="Price"/>
                        </div>
                        <div>
                            <h3>Product Discription</h3>
                        <input type="text" onChange={e=>{setNewDiscription(e.target.value)}} value={newDiscription} id="Discription" placeholder="Product Discription..."/>
                        </div>
                        <div>
                            <h3>Stock </h3>
                        <input type="number" onChange={e=>{setNewStock(e.target.value)}} value={newStock} id="stock" placeholder='stock'/>
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
                        <button  type="submit" onClick={e=>{handleSubmit(e)}} className="duration-400 hover:bg-yellow-400 hover:text-white px-4 py-2 rounded-[50px] border-2">Update</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UpdateProduct