import React, {  } from 'react'
import SendInput from './SendInput'
import Messages from './Messages';
import { useSelector } from "react-redux";
import {IoHappy } from "react-icons/io5";


const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);

    const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='sm:w-[66%] md:w-[70%] flex flex-col'>
                        <div className='md:h-[60px] sm:h-[60px] flex gap-2 items-center bg-zinc-800 px-4 py-2 mb-2'>
                            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                                <div className='w-10 rounded-full'>
                                    <img src={selectedUser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2 text-slate-400'>
                                    {/* Check if the user is the authenticated user, display "me" if true */}
                                    <p>{selectedUser?._id === authUser?._id ? 'Me' : selectedUser?.fullName}</p>
                                    {/* <p>{selectedUser?.fullName}</p> */}
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className='flex items-center justify-center sm:w-[66%] md:w-[70%] '>
                        <div className='flex items-center '>
                            <IoHappy className='mr-2 text-3xl' />
                            <h1 className='text-3xl text-slate-400 font-bold'>
                                Welcome Back, {authUser?.fullName}!
                            </h1>
                        </div>
                    </div>
                    
                )
            }
        </>

    )
}

export default MessageContainer