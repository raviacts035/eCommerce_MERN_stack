import { useState } from "react";
import { Navigate } from "react-router-dom";
import PostRequest from '../utils/PostRequest';

// import config from "../config/index";

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [data,setData]=useState();

    async function handleClick(e){
        e.preventDefault()
        const loginData=new FormData()
        loginData.set("email",email)
        loginData.set("password",password)        
        PostRequest(`http://127.0.0.1:5000/api/auth/login`,loginData,setData)
    }
    
    return (
        <section className="flex sm:w-[70%] mt-[20vh] mx-auto bg-blue-500 rounded-xl">
            {/* redirecting on sucess */}
            {data?.success && <Navigate to={'/'}/>}
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