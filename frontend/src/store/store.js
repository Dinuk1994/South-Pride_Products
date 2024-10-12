
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"
import adminProductSlice from "./admin/admin-product-slice";
import cartSlice from "./cart-slice"

const store = configureStore({

    reducer : {
        auth : authReducer,
        adminProducts : adminProductSlice,
        cart : cartSlice
    }
})

export default store;