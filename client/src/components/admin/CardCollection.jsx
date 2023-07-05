// A clikcable card that shows collection details 
import { Link} from 'react-router-dom';


const CardCollection=({name="Example Collection", _id="Id1234"})=>{
    // console.log("from Inside card collection")
    return (
        <article className='group'>
            <Link className="text-center" to={"/admin/collection/"+_id}>
                <div className="flex justify-between py-4 px-6 border-2 rounded-lg">
                    <div>{name}</div>
                    <p>{"id : "+_id}</p>
                </div>
            </Link>
            <div className='invisible group-hover:visible'>
                <button>edit</button>
            </div>
        </article>
    )
}

export default CardCollection