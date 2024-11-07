import React, { useState, useEffect } from 'react';
import FilteredUsers from './FilteredUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser, setFilteredUsers } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { allUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (search === "") {
            dispatch(setFilteredUsers(allUsers));
        } else {
            const filteredUsers = allUsers.filter((user) =>
                user.fullName.toLowerCase().startsWith(search.toLowerCase())
            );
            dispatch(setFilteredUsers(filteredUsers));
        }
    }, [search, allUsers, dispatch]);

    return (
        <div className='sm:w-[34%] md:w-[30%] border-r border-slate-400 p-2 flex flex-col'>
            <form action="" className='md:h-[50px] sm:h-[50px] flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-[100%] text-sm input input-bordered rounded-md text-slate-400 placeholder:text-slate-400'
                    type="text"
                    placeholder='Search'
                />
                {/* <button type='submit' className='btn bg-slate-400 text-black hover:text-slate-400'>
                    <BiSearchAlt2 className='w-6 h-6  outline-none'/>
                </button> */}
            </form>
            <div className="divider -mt-1"></div>
            <FilteredUsers />
            <div className='h-10'>
                <button onClick={logoutHandler} className='btn btn-sm bg-slate-400 text-slate-900 hover:bg-slate-900 hover:text-slate-400'>Logout</button>
            </div>
        </div>
    );
}

export default Sidebar;
