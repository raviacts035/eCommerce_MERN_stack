import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex=state.items.findIndex(item=>item.productId===action.payload?.productId);
            console.log(itemIndex)
            if (itemIndex>=0) {
                state.items[itemIndex].count+=1;
            }
            else {
                state.items.push(action.payload)
            }
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeFromCart:(state,action)=>{
            const inCartItems =  state.items.filter(
                item => state.items?.productId!==action.payload?.productId
            );
            state.items=inCartItems;
        },
        decrementItemCount:(state,action)=>{
            const itemIndex=state.items.findIndex(item=>item.productId===action.payload?.productId);
            if (state.items[itemIndex].count>1){
                state.items[itemIndex].count-=1;
            }
            else if(state.items[itemIndex].count === 1) {
                const inCartItems =  state.items.filter(
                    item => state.items?.productId!==action.payload?.productId
                );
                state.items=inCartItems;
            }

        },
        incrementItemCount:(state, action)=>{
            const itemIndex=state.items.findIndex(item=>item.productId===action.payload?.productId);
            state.items[itemIndex].count+=1;
        }
    }
})

export const {addToCart,clearCart,removeFromCart, decrementItemCount, incrementItemCount} =cartSlice.actions;

export default cartSlice.reducer;