import CardProduct from "./CardProduct";
import useFetch from "../../hooks/useFetch";
import { products_by_collection_url, domain_url} from "../../utils/index";

const ProductDashbord= ()=>{
    // console.log(domain_url+collectio_Dashbord_URL)
    const id = "6485620785fd4208794f52c9"
    const data=useFetch(domain_url+products_by_collection_url+id);
    let ProductList =data?.products
    // console.log(ProductList)

    return (!ProductList)?<div>Loading List of Products...</div>: (
        <>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <a className="border-1 p-2 underline text-lg" href="/admin/dashbord">
                    <div>Back To Dashbord</div>
                </a>
                <a className="border-1 p-2 bg-orange-500 rounded shadow-xl" href="/admin/new/Product">
                    <button>New Product</button>
                </a>
            </nav>
            <section className="mx-auto w-[300px] sm:w-[600px] lg:w-[1000px] border-2">
                <h2>Products under Collection</h2>
                {
                    ProductList.map(item => {                 
                        return (
                            <CardProduct {...item}/>
                        )
                    })
                }
                {/* <CardProduct {...item}/> */}
            </section>
        </>
    )
}

export default ProductDashbord