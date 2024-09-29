
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"
import adminProductSlice from "./admin/admin-product-slice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProduct : adminProductSlice

    }
})

export default store;