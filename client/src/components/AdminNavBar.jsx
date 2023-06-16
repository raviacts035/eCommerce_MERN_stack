const AdminNavBar= ()=>{
    return (
        <nav>
            <h2>Logo</h2>
            <ul>
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