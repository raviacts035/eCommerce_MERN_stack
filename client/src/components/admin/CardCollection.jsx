// A clikcable card that shows collection details 
const CardCollection=({name="Example Collection", id="Id1234"})=>{
    // console.log("from Inside card collection")
    return (
        <div className="m-auto p-2 border-2 rounded-lg w-[220px] h-[200px]">
            <a className="text-center" href={"admin/collection/"+id}>
                <div>{name}</div>
                <p>{"id : "+id}</p>
                <p>Card is under construction</p>
            </a>
        </div>
    )
}

export default CardCollection