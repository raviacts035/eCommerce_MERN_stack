async function PostRequest(url, body,fn){
    const responce= await fetch(url,{
        method:"POST",
        body: body,
        credentials: "include",
        mode: "cors",
    })
    const json = await responce.json();
    fn(json)
}

export default PostRequest