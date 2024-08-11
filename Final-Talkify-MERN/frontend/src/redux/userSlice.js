import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null,
        onlineUsers:null,
        allUsers:null,
        filteredUsers:null
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        setOtherUsers:(state, action)=>{
            state.otherUsers = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setOnlineUsers:(state,action)=>{
            state.onlineUsers = action.payload;
        },
        setAllUsers:(state,action)=>{
            state.allUsers=action.payload;
        },
        setFilteredUsers:(state,action)=>{
            state.filteredUsers=action.payload;
        }
    }
});
export const {setAuthUser,setOtherUsers,setSelectedUser,setOnlineUsers,setAllUsers,setFilteredUsers} = userSlice.actions;
export default userSlice.reducer;