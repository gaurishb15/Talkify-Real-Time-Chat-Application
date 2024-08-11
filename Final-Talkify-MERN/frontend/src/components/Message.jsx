import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {//whenever a new message is sent, the latest part of chat should be shown
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const formatDateTime = (timestamp) => {
        if (!timestamp) return 'Unknown time';
        const date = new Date(timestamp);
        return date.toLocaleString([], {
            weekday: 'short', // e.g., "Mon"
            year: 'numeric',  // e.g., "2024"
            month: 'short',   // e.g., "Aug"
            day: '2-digit',   // e.g., "10"
            hour: '2-digit',  // e.g., "02 PM"
            minute: '2-digit',// e.g., "30"
            hour12: true      // Use 12-hour clock
        });
    };

    return (
        <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="User avatar"
                        src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
                    />
                </div>
            </div>
            {/* Uncomment if you want to display sender's name */}
            {/* <div className="chat-header">
                {message?.senderId === authUser?._id ? authUser?.fullName : selectedUser?.fullName}
            </div> */}
            <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : 'bg-slate-800 text-white'}`}>
                {message?.message}
            </div>
            <div className="chat-k-neeche">
                <time className="text-xs opacity-50 text-white">
                    {formatDateTime(message?.createdAt)}
                </time>
            </div>
        </div>
    );
}

export default Message;
