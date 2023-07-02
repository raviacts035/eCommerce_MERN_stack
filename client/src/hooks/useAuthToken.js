import { useSelector } from "react-redux";

const useAuthToken=()=>{
    const UserData=useSelector(store=>store.user);
    const {token}=UserData
    return token
}

export default useAuthToken