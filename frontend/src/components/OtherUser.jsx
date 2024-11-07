import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const {selectedUser, onlineUsers, authUser} = useSelector(store=>store.user);
    const isOnline = onlineUsers?.includes(user._id);
    const selectedUserHandler = (user) => {//to save the selected user
        dispatch(setSelectedUser(user));
    }
    return (
        <>
            <div onClick={() => selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? 'bg-slate-500 text-black' : 'text-white'} flex gap-2 hover:text-black items-center hover:bg-slate-300 hover:opacity-80 rounded p-2 cursor-pointer  h-14`}>
                <div className={`avatar ${isOnline ? 'online' : '' }`}>
                    <div className='w-10 rounded-full'>
                        <img src={user?.profilePhoto} alt="user-profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1 '>
                    <div className='flex justify-between gap-2 '>
                        {/* Check if the user is the authenticated user, display "me" if true */}
                        <p>{user?._id === authUser?._id ? 'Me' : user?.fullName}</p>
                        {/* <p>{user?.fullName}</p> */}
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default OtherUser