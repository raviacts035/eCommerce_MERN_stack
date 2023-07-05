import {Link} from 'react-router-dom'


const AdminNavBar= ()=>{
    return (
        <nav className="sticky top-0 w-[90vw] m-auto bg-white">
            <div className="flex py-4 w-full justify-between items-center">
                <Link to={"/"}><p className="text-green-800 p-2 text-3xl bg-orange-400 font-bold">Slipkart</p></Link>
                <ul className="flex gap-4 text-xl">
                    <Link to={"/admin/dashbord"}><p className='underline'>Home</p></Link>
                    <Link to={"/admin/dashbord/collection"}><p className='underline'>Collection</p></Link>
                    <Link to={"/admin/dashbord/order"}><p className='underline'>Orders</p></Link>
                    <Link to={"/admin/dashbord/coupon"}><p className='underline'>Coupon</p></Link>
                    <Link to={"/admin/dashbord/user"}><p className='underline'>User</p></Link>
                </ul>
            </div>
            <hr />
        </nav>
    )
}

export default AdminNavBar