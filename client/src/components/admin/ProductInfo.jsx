import useFetch from "../../hooks/useFetch";
import {useParams } from 'react-router-dom';
import { useState } from "react";
import { product_by_id_url, domain_url} from "../../utils/index";
import UpdateProduct from "./UpdateProduct";


const ProductInfo=()=>{
    const [editFlag,setEditFlag]=useState(false)
    const {id}=useParams()
    const data=useFetch(domain_url+product_by_id_url+id);
    let {products} =data
    // console.log(products)
    return (
        <article className="m-auto p-2">
            {/* image container */}
            <div>
                <div>Product Name</div>
                <p>Product Info</p>
                <img src="#" alt="product name" />
            </div>
            <div>
                <button onClick={()=>setEditFlag(true)}>Edit</button>
            </div>
            {editFlag &&<div className="m-4">
                <UpdateProduct {...products}/>
            </div>}
        </article>
    )
}

export default ProductInfo