import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "../../api/orderAPI/createOrder";

const initialState = {
    approvalURL : null,
    isLoading : null,
    orderId : null
}


const shoppingOrderSlice = createSlice({
    name: "shoppingOrderSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createOrder.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.isLoading = false
            state.approvalURL = action.payload.approvalURL
            state.orderId = action.payload.orderId
        })
        .addCase(createOrder.rejected,(state)=>{
            state.isLoading = false
            state.approvalURL = null
            state.orderId = null
        })
    }
})

export default shoppingOrderSlice.reducer