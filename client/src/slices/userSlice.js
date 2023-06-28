import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name: "user",
    initialState:{
        data:{},
        token:'',
        isLoggedIn:false

    },
    reducers:{
        login_user:(state,action)=>{
            state.data=action.payload;
            state.isLoggedIn=true;
        },
        logout_user:(state)=>{
            state.data={};
            state.isLoggedIn=false;
        },
        SetAuthToken:(state,action)=>{
            state.token=action.payload
        }
    }
})

export const {login_user, logout_user, SetAuthToken}= userSlice.actions;
export default userSlice.reducer;