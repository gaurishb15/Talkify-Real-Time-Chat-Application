import { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {//bcz of network call
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;//to authenticate the user
                //the above is used because if we see in the userRoute of backend, we can see that isAuthenticated function also runs first
                const res = await axios.get(`${BASE_URL}/api/v1/user`);
                // store in userSlice using redux
                //console.log("other users -> ",res);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [dispatch])

}

export default useGetOtherUsers