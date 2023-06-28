import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

const NavBar= ()=>{
    const CartItems=useSelector(store=>store.cart.items)
    const UserData=useSelector(store=>store.user);
    return (
        <nav className="sticky top-0 px-20 bg-white">
            <div className="flex py-4 w-full justify-between items-center">
                <div>
                <Link to={"/"}><p className="text-green-800 p-1 text-3xl font-bold">Let's Cart</p></Link>
                </div>
                <div className='flex items-center'>
                    <input type="text" className='w-[30vw] h-10 mx-2 border-2 border-grey-200 rounded-xl px-2 py-2 bg-grey-400' placeholder='Search'/>
                    <button className='rounded-xl bg-green-800 text-white px-[4vw] py-2 shadow-lg hover:shadow-xl'>search</button>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link className="shadow-lg hover:shadow-xl px-[2vw] py-2 rounded-xl border-2 border-grey-200" to={'/cart'}>Cart ({CartItems.length})</Link>
                    {
                    (!UserData.isLoggedIn)?
                    <Link to={"/login"}>
                        <button className="shadow-lg hover:shadow-xl px-[2vw] py-2 rounded-xl border-2 border-grey-200">Login</button>
                    </Link>:
                    <Link to={'/myprofile'}>
                        <p>Hello {UserData?.data?.name}</p>
                    </Link>
                    }
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default NavBar