import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {//bcz of network call
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${BASE_URL}/api/v1/user/me`);
                // store using redux
                console.log("other users -> ",res);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])

}

export default useGetOtherUsers