import AdminNavBar from "./AdminNavBar";
import CardCollection from "./CardCollection";
import useFetch from "../../hooks/useFetch";
import { collectio_Dashbord_URL} from "../../utils/index";

const CollectionDashBord= ()=>{
    // let data= useFetch(collectio_Dashbord_URL);
    // let CollectionsList =data?.allCOllection;
    let CollectionsList=[{
        name:"Ravi",
        _id:"id52627"
    }]

    return (!CollectionsList.length)?<div>Loading Collection...</div>: (
        <>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <a className="border-1 p-2 underline text-lg" href="/admin/dashbord">
                    <div>Back To Dashbord</div>
                </a>
                <a className="border-1 p-2 bg-orange-500 rounded shadow-xl" href="/admin/new/collection">
                    <button>New Collection</button>
                </a>
            </nav>
            <section className="mx-auto w-[300px] sm:w-[600px] lg:w-[1000px] border-2">
                {
                    CollectionsList.map(item => {                    
                        return (
                            <CardCollection {...item}/>
                        )
                    })
                }
                {/* <CardCollection {...item}/> */}
            </section>
        </>
    )
}

export default CollectionDashBord