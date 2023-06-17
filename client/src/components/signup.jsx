import { useState } from "react";
import { redirect } from "react-router-dom";

const Signup =()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('')

    async function handleClick(e){
        e.preventDefault()
        if (confirmPassword!==password) return
        const loginData=new FormData()
        loginData.set("email",email)
        loginData.set("name",name)
        loginData.set("password",password)
        console.log(loginData)

        const resp= await fetch(`http://127.0.0.1:5000/api/auth/signup`,{
            method:"POST",
            body: loginData,
            credentials: "include",
            mode: "cors",
        })
        let data = resp.json()
        console.log(data)
        if(data?.body?.success) redirect("/")
    }
    
    return (
        <section className="flex sm:w-[70%] mt-[20vh] h-[60vh] mx-auto bg-blue-500 rounded-xl">
        <div className="sm:w-[59%] text-center">
            Welcome to Let's Cart Signup page...
        </div>
        {/* Right Part  */}
        <div className="sm:w-[40%] m-4 p-4 bg-[#ffff]">
            <h2 className="text-center">User Login</h2>
            <form className="flex flex-col items-center justify-between">
                <div>
                    <h3>name</h3>
                    <input className="border-2 border-black" type="text" name="name" onChange={e=>{setName(e.target.value)}} value={name} id="name"/>
                </div>
                <div>
                    <h3>Email</h3>
                    <input className="border-2 border-black" type="email" name="email" onChange={e=>{setEmail(e.target.value)}} value={email} id="email" />
                </div>
                <div>
                    <h3>Password</h3>
                    <input className="border-2 border-black" type="password" onChange={e=>{setPassword(e.target.value)}} name="password" value={password} id="password"/><br/>
                </div>
                <div>
                    <h3>Confirm Password</h3>
                    <input className="border-2 border-black" type="password" onChange={e=>{setConfirmPassword(e.target.value)}} name="setConfirmPassword" id="confirm" value={confirmPassword}/><br/>
                </div>
                <div>
                    <input className="py-1 px-4 my-3 text-xl bg-yellow-400 rounded-xl" type="submit" onClick={handleClick} value="submit"/>
                </div>
                {(password!==confirmPassword) && <div className="text-red-400 text-[15px]">Password doesn't match Confirm Password</div>}
            </form>
            <p className="text-center my-4">Go to <a href="/signup" className="text-blue-600 underline">Login</a> page</p>
        </div>
        </section>
    )
}


export default Signup