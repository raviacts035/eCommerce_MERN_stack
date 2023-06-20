import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name: "user",
    initialState:{
        user:{},
        isLoggedIn:false

    },
    reducers:{
        login_user:(state,action)=>{
            state.user=action.payload;
            state.isLoggedIn=true;
        },
        logout_user:(state)=>{
            state.user={},
            state.isLoggedIn=false;
        }
    }
})

export const {login_user, logout_user}= userSlice.actions;
export default userSlice.reducer;