import {domain_url, product_by_id_url} from '../utils/index';
import ProductCard from '../components/ProductCard';
import useFetch from "../hooks/useFetch";

const Home= ()=>{
    let {products}=useFetch(domain_url+product_by_id_url);
    // console.log(products)
    return (!products)? <div>Shimmer Ui</div> :(
        <main className='w-[90vw] m-auto'>
        <div className="bg-orange-200">
            <div className='text-green-800 px-20 py-10 rounded-xl border-1 my-6'>
                <p className='text-4xl font-bold my-4'>Grab Upto 50% off On <br />Selected Headphone</p>
                <button className='rounded-xl bg-green-800 text-white px-10 py-2 '>Buy now</button>
            </div>
            <div>
                {/* image goes here */}
            </div>
        </div>
        <hr />
        {!products&& <div className="text-center">No Products avilable in store</div>}
        <section className='flex flex-col'>
            <p className='text-xl text-bold py-4 '>Recommended for you</p>
            <div className='flex flex-wrap justify-between'>
            {
                products.map(product=>{
                    return <ProductCard key={product._id} product={product}/>
                })
            }
            </div>
        </section>
        </main>
    )
}

export default Home