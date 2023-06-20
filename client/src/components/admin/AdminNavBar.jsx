const AdminNavBar= ()=>{
    return (
        <nav className="flex justify-between px-20 bg-blue-400 py-4">
            <h2>Let's Cart</h2>
            <ul className="flex gap-4 text-xl">
                <a href="/admin/dashbord"><li>Home</li></a>
                <a href="/admin/dashbord/collection"><li>Collection</li></a>
                <a href="/admin/dashbord/order"><li>Orders</li></a>
                <a href="/admin/dashbord/coupon"><li>Coupon</li></a>
                <a href="/admin/dashbord/user"><li>User</li></a>
            </ul>
            <a href="/login">
            <button>Login</button>
            </a>
        </nav>
    )
}

export default AdminNavBar