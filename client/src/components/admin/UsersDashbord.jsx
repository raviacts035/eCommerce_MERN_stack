const UsersDashbord=()=>{
    return (
    <section>
            <nav className="flex justify-between px-20 bg-blue-400 py-4 w-full">
                <a className="border-1 p-2 underline text-lg" href="/admin/dashbord">
                    <div>Back To Dashbord</div>
                </a>
                <a className="border-1 p-2 bg-orange-500 rounded shadow-xl" href="/admin/new/collection">
                </a>
            </nav>
        <div>User profiles will be listed here</div>
    </section>
    )
}

export default UsersDashbord