import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

const NavBar= ()=>{
    const CartItems=useSelector(store=>store.cart.items)
    const UserData=useSelector(store=>store.user);
    return (
        <nav className="sticky top-0 px-20 bg-white">
            <div className="flex py-4 w-full justify-between items-start">
                <div>
                <Link to={"/"}><p className="text-green-800 p-1 text-3xl font-bold">Let's Cart</p></Link>
                </div>
                
                {/* login or user icons */}
                <div className='flex gap-3 items-baseline'>
                    <Link className="shadow-lg hover:shadow-xl px-[2vw] py-2 rounded-[50px] border-2 border-grey-200" to={'/cart'}>Cart ({CartItems.length})</Link>
                    {
                    (!UserData.isLoggedIn)?
                    <Link to={"/login"}>
                        <button className="shadow-lg hover:shadow-xl px-[2vw] py-2 rounded-[50px] border-2 border-grey-200">Login</button>
                    </Link>:
                    <div className='group'>
                        <Link to={'/myprofile'}>
                            <p>Hello, {UserData?.data?.name}</p>
                        </Link>
                        <div className='duration-200 absolute top-16 right-5 bg-green-900 border-2 p-4 w-[300px] bg-white collapse group-hover:visible'>
                            <Link to={'/orders'}>
                                <p className='border-2 bg-white px-4 py-1  my-2'>Orders</p>
                            </Link>
                            <Link to={'/myprofile'}>
                                <p className='border-2 bg-white px-4 py-1 mb-2'>My Profile</p>
                            </Link>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default NavBar