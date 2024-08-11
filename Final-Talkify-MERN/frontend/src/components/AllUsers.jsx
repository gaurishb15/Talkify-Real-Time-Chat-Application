import React from 'react';
import OtherUser from './OtherUser';
import useGetAllUsers from '../hooks/useGetAllUsers';
import { useSelector } from 'react-redux';

const AllUsers = () => {
    // Use custom hook to fetch other users
    useGetAllUsers();
    
    //extract from redux-store
    const {allUsers } = useSelector(store => store.user);

    //if (!allUsers) return null; -there will always be one user (user himself/herself)
    
    return (
        <div className='overflow-auto flex-1 '>
            {allUsers?.map((user)=>(
                    <OtherUser key={user._id} user={user} />
            ))}
        </div>
    );
}

export default AllUsers;
