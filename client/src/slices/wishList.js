import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        items:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.items.push(action.payload)
        },
        clearWishlist:(state)=>{
            state.items=[]
        },
        removeFromWishlist:(state,action)=>{
            state.items.pop()
        }
    }
})

export const {addToWishlist,clearWishlist,removeFromWishlist} =wishlistSlice.actions;

export default wishlistSlice.reducer;