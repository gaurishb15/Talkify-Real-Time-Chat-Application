import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    // Use custom hook to fetch other users
    useGetOtherUsers();
    
    //extract from redux-store
    const { otherUsers, authUser } = useSelector(store => store.user);

    if (!otherUsers) return null; // Early return if there are no other users
    
    return (
        <div className='overflow-auto flex-1 '>
            {/* Optionally render the authUser if needed */}
            {authUser && (
                <OtherUser key={authUser._id} user={authUser} />
            )}
            {/* Render other users */}
            {otherUsers?.map((user) => (
                <OtherUser key={user._id} user={user} />
            ))}
        </div>
    );
}

export default OtherUsers;
