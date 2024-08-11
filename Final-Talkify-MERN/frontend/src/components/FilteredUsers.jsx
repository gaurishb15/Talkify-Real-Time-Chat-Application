import React from 'react';
import OtherUser from './OtherUser';
import useGetAllUsers from '../hooks/useGetAllUsers';
import { useSelector } from 'react-redux';

const FilteredUsers = () => {
    // Use custom hook to fetch other users
    useGetAllUsers();
    
    //extract from redux-store
    const {filteredUsers} = useSelector(store => store.user);

    if (!filteredUsers) return null;
    
    return (
        <div className='overflow-auto flex-1 '>
            {filteredUsers?.map((user)=>(
                    <OtherUser key={user._id} user={user} />
            ))}
        </div>
    );
}

export default FilteredUsers;
