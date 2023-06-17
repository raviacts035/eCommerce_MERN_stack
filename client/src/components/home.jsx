import { useCallback, useState } from "react";

const Home= ()=>{
    const [products,setProducts]=useState([])

    // Products Fetcher
    const DataFetcher= useCallback(async ()=>{
        let res=await fetch('http://127.0.0.1:5000/api/products/')
        res= res.json();
        setProducts(res?.products)
        console.log(products)
    })

    // DataFetcher()
    return (
        <>
        <h3 className="text-3xl font-bold text-center">Home Page is under Construction...</h3>
        {!products&& <div className="text-center">No Products avilable in store</div>}
        </>
    )
}

export default Home