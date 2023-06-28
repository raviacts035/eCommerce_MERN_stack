import {domain_url, myprofile_url} from '../utils/index';
import useFetch from '../hooks/useFetch';

const MyProfile=()=>{
    const data=useFetch(domain_url+myprofile_url)
    const {user }=data
    return (
        <main>
            <h2>My Profile</h2>
            <div>
                <p>Profile Name</p>
                <p>{user?.name}</p>
                <p>email</p>
                <p>{user?.email}</p>
                <p>User Role</p>
                <p>{user?.role}</p>
            </div>
        </main>
    )
}

export default MyProfile