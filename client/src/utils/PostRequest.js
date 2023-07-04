async function PostRequest(url, body,token,fn){
    console.log('token : '+token)
    const responce= await fetch(url,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${token}`
        },
        body: body,
        mode: "cors",
    })
    const json = await responce.json();
    fn(json)
}

export default PostRequest