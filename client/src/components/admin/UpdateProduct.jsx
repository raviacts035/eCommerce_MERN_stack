import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";
import { domain_url} from '../../utils/index'
import PostRequest from "../../utils/PostRequest";


const UpdateProduct=({name, id})=>{
    const [name,setName]=useState(name);
    const [price, setPrice]=useState(price);
    const [discription,setDiscription]=useState(discription);
    const [stock,setStock]=useState(stock);
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
    }
    
    return (
        <section>
            <p>Edit Product</p>
            <p>Page Under Construction</p>
            <div>
                <p>Name</p>
                <input onChange={eve=>setName(eve.target.value)} type="text" value={newName}/>
            </div>
            <div>
                <button onClick={eve=>{}}>Update</button>
            </div>
        </section>
    )
}

export default UpdateProduct