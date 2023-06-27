import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

const NavBar= ()=>{
    const CartItems=useSelector(store=>store.cart.items)    
    return (
        <nav className="sticky top-0 px-20 bg-blue-400 ">
            <div className="flex py-4 w-full justify-between items-center">
                <h2 className="text-yellow-300 p-1 text-3xl font-bold">Let's Cart</h2>
                <ul className="flex flex-row gap-8 font-bold text-lg">
                <Link to={"/"}>Home</Link>
                    <li>Trending</li>
                    <li>Fashion</li>
                    <li>Footware</li>
                    <li>Gadgets</li>
                </ul>
                <div>
                    <Link to={'/cart'}>Cart ({CartItems.length})</Link>
                    <Link to={"/login"}>
                        <button className="bg-orange-300 p-2">Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar