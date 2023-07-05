import {domain_url, product_by_id_url} from '../utils/index';
import ProductCard from '../components/ProductCard';
import useFetch from "../hooks/useFetch";
import { useState, useCallback } from 'react';

const Home= ()=>{
    let {products}=useFetch(domain_url+product_by_id_url);
    const [searchText,setSearchText]=useState('');
    // Search filter function
    const FilterSearch=useCallback((arr=[],searchText='')=>{
        if (!searchText) return arr
        let result=arr.filter((element)=>{
            let title=element.name.toLowerCase().search(searchText.toLowerCase())
            let discription=element.discription.toLowerCase().search(searchText.toLowerCase())
            return title+1 || discription+1
        })
        return [...result]
    })

    // search handle function

    const filteredList=FilterSearch(products,searchText)
    // console.log(filteredList)
    return (!filteredList)? <div>Shimmer Ui</div> :(
        <main className='w-[90vw] m-auto'>
        <div className='flex items-center w-fit sticky top-4 my-4 mx-auto'>
            <input type="text" onChange={(event)=>{setSearchText(event.target.value)}} value={searchText} className='w-[30vw] h-10 mx-2 border-2 border-grey-200 rounded-xl px-2 py-2 bg-grey-400' placeholder='Search'/>
            <button className='rounded-[50px] bg-green-800 text-white px-[4vw] py-2 shadow-lg hover:shadow-xl'>search</button>
        </div>
        <hr />
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
        {!filteredList&& <div className="text-center">No Products avilable in store</div>}
        <section className='flex flex-col'>
            <p className='text-xl text-bold py-4 '>Recommended for you</p>
            <div className='flex flex-wrap justify-between'>
            {
                filteredList.map(product=>{
                    return <ProductCard key={product._id} product={product}/>
                })
            }
            </div>
        </section>
        </main>
    )
}

export default Home