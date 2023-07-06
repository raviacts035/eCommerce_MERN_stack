import {domain_url, delete_product_by_id} from '../../utils/index';
import useFetch from '../../hooks/useFetch';
import {Link } from 'react-router-dom';


const DelProductDialog=({_id,name, setBoxFlag})=>{
    const response=useFetch(domain_url+delete_product_by_id+_id)
    const handleDelete=()=>{
    }
    return (response.success)?
        <div className=''>Success</div>
        :(
        <article className='absolute top-0 translate-x-[50%] translate-y-[50vh] bg-white w-[300px] h-[200px] p-4 border-2 rounded-xl'>
            <p className='m-[20px] text-[22px] font-bold text-green-800'>{`Are you sure, delete ${name} ?`}</p>
            <div className='flex justify-around'>
              <Link to={"/admin/product/" + _id}>
                    <button onClick={()=>{setBoxFlag(false)}} 
                    className="duration-400 hover:shadow-xl px-4 py-2 rounded-[50px] border-2">
                        cancel
                    </button>
              </Link>
              <button onClick={()=>{handleDelete()}}
              className="duration-400 hover:shadow-xl hover:bg-red-400 hover:text-white px-4 py-2 rounded-[50px] border-2">
                delete
              </button>
            </div>
        </article>
    )
}

export default DelProductDialog