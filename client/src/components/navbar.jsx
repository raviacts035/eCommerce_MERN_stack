const NavBar= ()=>{
    return (
        <nav className="sticky top-0 px-20 bg-blue-400 ">
            <div className="flex py-4 w-full justify-between items-center">
                <h2 className="text-yellow-300 p-1 text-3xl font-bold">Let's Cart</h2>
                <ul className="flex flex-row gap-8 font-bold text-lg">
                    <a href="/">Home</a>
                    <li>Trending</li>
                    <li>Fashion</li>
                    <li>Footware</li>
                    <li>Gadgets</li>
                </ul>
                <div>
                    <a href="/cart">Cart (0)</a>
                    <a href="/login">
                    <button className="bg-orange-300 p-2">Login</button>
                    </a>                
                </div>
            </div>
        </nav>
    )
}

export default NavBar