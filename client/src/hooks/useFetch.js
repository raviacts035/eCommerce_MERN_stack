// Usefull to fetch 
import { useState } from "react";

const useFetch=async (url)=>{
    const [data,setData]=useState({})

    if (!url) return {}

    let responce=await fetch(url)
    const json = await responce.json();
    setData(json)
    
    return data 
}

export default useFetch