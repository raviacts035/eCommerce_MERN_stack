import { useState } from "react";
import { redirect } from "react-router-dom";

const Signup =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    async function handleClick(e){
        e.preventDefault()
        const loginData=new FormData()
        loginData.set("email",email)
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
        <section>
        <h2>Login</h2>
        <form>
        <h3>Email</h3>
        <input type="email" name="email" onChange={e=>{setEmail(e.target.value)}} value={email} id="" />
        <h3>Password</h3>
        <input type="password" onChange={e=>{setPassword(e.target.value)}} name="password" value={password} id=""/><br/>
        <input type="submit" onClick={handleClick} value="submit"/>
        </form>
        <p>Don't have an account!!<a href="/signup">Signup</a></p>
        </section>
    )
}


export default Signup