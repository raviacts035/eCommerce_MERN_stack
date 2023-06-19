import { useState } from "react";
import { redirect } from "react-router-dom";

const AdminSignin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const role="ADMIN";

    async function handleClick(e){
        e.preventDefault()
        const loginData=new FormData()
        loginData.set("email",email)
        loginData.set("password",password)
        loginData.ser("role",role)
        console.log(loginData)

        const resp= await fetch(`http://127.0.0.1:5000/api/auth/signup`,{
            method:"POST",
            body: loginData,
            credentials: "include",
            mode: "cors",
        })
        let data = resp.json()
        console.log(data)
        if(data?.body?.success) redirect("/admin/dashbord")
    }
    
    return (
        <section>
            <h2>Admin Sign Up</h2>
            <form>
                <h3>Email</h3>
                <input type="email" name="email" onChange={e=>{setEmail(e.target.value)}} value={email} id="" />
                <h3>Password</h3>
                <input type="password" onChange={e=>{setPassword(e.target.value)}} name="password" value={password} id=""/><br/>
                <input type="submit" onClick={handleClick} value="submit"/>
            </form>
        </section>
    )
}


export default AdminSignin