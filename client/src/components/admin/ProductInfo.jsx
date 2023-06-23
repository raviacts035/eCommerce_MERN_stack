import useFetch from "../../hooks/useFetch";
import { product_by_id_url, domain_url} from "../../utils/index";


const ProductInfo=()=>{
    const data=useFetch(domain_url+product_by_id_url);
    let ProductInfo =data?.products
    console.log(ProductInfo)
    return (
        <div className="m-auto p-2 border-2 rounded-lg w-[220px] h-[200px]">
                <div>Product Name</div>
                <p>Product Info</p>
                <img src="#" alt="product name" />
        </div>
    )
}

export default ProductInfo