async function PostRequest(url, body,token,fn){
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