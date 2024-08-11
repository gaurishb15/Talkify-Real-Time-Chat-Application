import React, {useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store=>store.user);
    const {messages} = useSelector(store=>store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/message/send/${selectedUser?._id}`, {message}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            dispatch(setMessages([...messages, res?.data?.newMessage]))
        } catch (error) {
            console.log(error);
        } 
        setMessage("");
    }
    return (
        <form onSubmit={onSubmitHandler} className='px-4 my-3'>
            <div className='w-full h-10 flex flex-row justify-between'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message'
                    className='border text-sm rounded-lg block sm:w-[87%] md:w-[91%] p-3 border-slate-800 bg-slate-400 text-black placeholder-black h-10 input input-bordered'
                />
                <button type="submit" className=' flex end-0 items-center justify-center w-10 h-10 rounded-full bg-slate-800'>
                    <IoSend className=''/>
                </button>
            </div>
        </form>
    )
}

export default SendInput