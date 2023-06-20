import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../slices/userSlice";
import cartSlice from "../slices/cartSlice";
import wishlistSlice from "../slices/wishList";

const store =configureStore({
    reducer:{
        user:userSlice,
        cart:cartSlice,
        wishlist: wishlistSlice,
    },
});

export default store