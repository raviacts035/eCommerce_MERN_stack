const AdminNavBar= ()=>{
    return (
        <nav className="flex justify-between px-20 bg-blue-400 py-4">
            <h2>Let's Cart</h2>
            <ul className="flex gap-4 text-xl">
                <li>Home</li>
                <li>Collection</li>
                <li>Orders</li>
                <li>Coupon</li>
                <li>User</li>
            </ul>
            <a href="/login">
            <button>Login</button>
            </a>
        </nav>
    )
}

export default AdminNavBar