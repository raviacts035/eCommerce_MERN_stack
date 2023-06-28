import { useSelector } from "react-redux";

async function PostRequest(url, body,fn){
    const UserData=useSelector(store=>store.user);
    const {token}=UserData

    const responce= await fetch(url,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${token}`
        },
        body: body,
        credentials: "include",
        mode: "cors",
    })
    const json = await responce.json();
    fn(json)
}

export default PostRequest