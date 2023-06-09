import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {domain_url, signin_url} from '../utils/index';
import {useDispatch} from 'react-redux';
import { login_user, SetAuthToken} from '../slices/userSlice';
 
// import config from "../config/index";

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate()

    async function handleClick(e){
        e.preventDefault()
        const loginData=new FormData()
        loginData.set("email",email)
        loginData.set("password",password)     
        const responce= await fetch(domain_url+signin_url,{
            method:"POST",
            body: loginData,
            credentials: "include",
            mode: "cors",
        })
        const data = await responce.json();

        if (data?.success && data?.token){
            dispatch(SetAuthToken(data.token))
            dispatch(login_user(data.user))
            if(data.user?.role==='ADMIN') return navigate('/admin/dashbord');
            navigate('/')
        }
    }
    
    return (
        <section className="flex sm:w-[70%] mt-[20vh] mx-auto bg-blue-500 rounded-xl">
        <div className="sm:w-[59%] text-center">
            <p>Welcome to Let's Cart Login page...</p>
        </div>
        {/* Right Part  */}
        <div className="sm:w-[40%] m-4 p-4 bg-[#ffff]">
            <h2 className="text-center my-2">User Login</h2>
            <form className="flex flex-col items-center gap-5">
                <div className="my-2">
                    <h3>Email</h3>
                    <input className="border-2 border-black" type="email" name="email" onChange={e=>{setEmail(e.target.value)}} value={email} id="" />
                </div>
                <div className="my-2">
                    <h3>Password</h3>
                    <input className="border-2 border-black" type="password" onChange={e=>{setPassword(e.target.value)}} name="password" value={password} id=""/><br/>
                </div>
                <div className="my-2">
                    <input className="py-1 px-4  text-xl bg-yellow-400 rounded-xl" type="submit" onClick={handleClick} value="submit"/>
                </div>
            </form>
            <p className="text-center my-4">Don't have an account!! <a href="/signup">Signup</a></p>
        </div>
        </section>
    )
} 

export default Login