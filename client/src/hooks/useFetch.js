// Usefull to fetch 
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const UserData=useSelector(store=>store.user);
    const {token}=UserData
    const [data,setData]=useState({})
    useEffect(()=>{
        getData(setData)
    },[]);
    
    async function getData(setData){
        let responce=await fetch(url,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const json = await responce.json();
        setData(json)
    }
    return data 
}

export default useFetch