import CardProduct from "./CardProduct";
import useFetch from "../../hooks/useFetch";
import { products_by_collection_url, domain_url} from "../../utils/index";
import { Link, useParams} from "react-router-dom";

const ProductDashbord= ()=>{
    // console.log(domain_url+collectio_Dashbord_URL)
    const {id} = useParams()
    const data=useFetch(domain_url+products_by_collection_url+id);
    let ProductList =data?.products
    // console.log(ProductList)

    return (!ProductList)?<div>Loading List of Products...</div>: (
        <>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <Link className="border-1 p-2 underline text-lg" to={"/admin/dashbord"}>
                    <div>Back To Dashbord</div>
                </Link>
                <Link className="border-1 p-2 bg-orange-500 rounded shadow-xl" to={"/admin/new/Product/collection/"+id}>
                    <button>New Product</button>
                </Link>
            </nav>
                <hr />
            <section className="mx-auto w-[300px] sm:w-[600px] lg:w-[1000px]">
                <h2>Products under Collection ID : {id}</h2>
                <article className="flex gap-6">
                    {
                        ProductList.map(product => {                 
                            return (
                                <CardProduct key={product._id} product={product}/>
                            )
                        })
                    }
                </article>
            </section>
        </>
    )
}

export default ProductDashbord