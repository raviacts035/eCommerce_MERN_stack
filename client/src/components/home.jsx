import {domain_url, product_by_id_url} from '../utils/index';
import ProductCard from '../components/ProductCard';
import useFetch from "../hooks/useFetch";

const Home= ()=>{
    let {products}=useFetch(domain_url+product_by_id_url);
    // console.log(products)
    return (!products)? <div>Shimmer Ui</div> :(
        <main className='w-[90vw] m-auto'>
        <h3 className="text-3xl font-bold text-center">Welcome to Home Page of Let's Cart</h3>
        {!products&& <div className="text-center">No Products avilable in store</div>}
        <section className='flex flex-wrap'>
            {
                products.map(product=>{
                    return <ProductCard key={product._id} product={product}/>
                })
            }
        </section>
        </main>
    )
}

export default Home