import {domain_url, myprofile_url} from '../utils/index';
import useFetch from '../hooks/useFetch';
import {useDispatch} from 'react-redux';
import {logout_user,SetAuthToken} from '../slices/userSlice';
import { redirect } from 'react-router-dom';

const MyProfile=()=>{
    const data=useFetch(domain_url+myprofile_url)
    const {user }=data
    const dispatch=useDispatch()
    const handleLogout=()=>{
        dispatch(logout_user());
        dispatch(SetAuthToken(null))
        redirect('/')
    }
    return (
        <main>
            <div>
                <h2>My Profile</h2>
                <div>
                    <p>Profile Name</p>
                    <p>{user?.name}</p>
                    <p>email</p>
                    <p>{user?.email}</p>
                    <p>User Role</p>
                    <p>{user?.role}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleLogout()}>Logout</button>
            </div>
        </main>
    )
}

export default MyProfile