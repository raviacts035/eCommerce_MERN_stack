// A clikcable card that shows collection details 
const CardCollection=({name="Example Collection", _id="Id1234"})=>{
    // console.log("from Inside card collection")
    return (
            <a className="text-center" href={"/admin/collection/"+_id}>
        <div className="m-auto p-2 border-2 rounded-lg w-[220px] h-[200px]">
                <div>{name}</div>
                <p>{"id : "+_id}</p>
        </div>
            </a>
    )
}

export default CardCollection