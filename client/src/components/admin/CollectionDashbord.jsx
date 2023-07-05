import CardCollection from "./CardCollection";
import useFetch from "../../hooks/useFetch";
import { Link} from 'react-router-dom';
import { collectio_Dashbord_URL, domain_url} from "../../utils/index";

const CollectionDashBord= ()=>{
    // console.log(domain_url+collectio_Dashbord_URL)
    
    const data=useFetch(domain_url+collectio_Dashbord_URL);
    let CollectionsList =data?.allCOllection

    return (!CollectionsList)?<div>Loading Collection...</div>: (
        <section >
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <Link className="border-1 p-2 underline text-lg" to={"/admin/dashbord"}>
                    <div>Back To Dashbord</div>
                </Link>
                <Link className="border-1 p-2 bg-orange-500 rounded shadow-xl" to={"/admin/new/collection"}>
                    <button>New Collection</button>
                </Link>
            </nav>
            <section className='w-[90vw] m-auto'>
                <h2 className='text-center text-[25px] text-bold py-4 font-bold'>Collection Dashbord</h2>
                <article className="flex flex-col gap-[15px]">
                {
                    CollectionsList.map(item => {                    
                        return (
                            <CardCollection {...item}/>
                        )
                    })
                }
                </article>
                {/* <CardCollection {...item}/> */}
            </section>
        </section>
    )
}

export default CollectionDashBord