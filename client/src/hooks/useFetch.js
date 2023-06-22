// Usefull to fetch 
import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState({})
    useEffect(()=>{
        getData(setData)
    },[]);
    
    async function getData(setData){
        let responce=await fetch(url)
        const json = await responce.json();
        setData(json)
    }
    return data 
}

export default useFetch