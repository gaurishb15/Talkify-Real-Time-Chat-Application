import { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllUsers, setFilteredUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetAllUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {//bcz of network call
        const fetchAllUsers = async () => {
            try {
                axios.defaults.withCredentials = true;//to authenticate the user
                //the above is used because if we see in the userRoute of backend, we can see that isAuthenticated function also runs first
                const res = await axios.get(`${BASE_URL}/api/v1/user/allUsers`);
                // store in userSlice using redux
                //console.log("other users -> ",res);
                dispatch(setAllUsers(res.data));
                dispatch(setFilteredUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllUsers();
    }, [dispatch])

}

export default useGetAllUsers