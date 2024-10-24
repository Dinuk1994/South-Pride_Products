import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "../../api/orderAPI/createOrder";
import toast from "react-hot-toast";
import { capturePayment } from "../../api/orderAPI/capturePayment";
import { getOrdersByUserId } from "../../api/orderAPI/getOrderByUserId";
import { getAllOrders } from "../../api/orderAPI/getAllOrders";


const initialState = {
    approvalURL : null,
    isLoading : null,
    orderId : null,
    orders :[]
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
            toast.success("Order Created successfull")
            sessionStorage.setItem('currentOrderId',JSON.stringify(action.payload.orderId))
        })
        .addCase(createOrder.rejected,(state)=>{
            state.isLoading = false
            state.approvalURL = null
            state.orderId = null
        })
        .addCase(capturePayment.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(capturePayment.fulfilled,(state,action)=>{
            state.isLoading = false
            state.approvalURL = action.payload
        })
        .addCase(capturePayment.rejected,(state)=>{
            state.isLoading = false
            state.approvalURL = null
        })
        .addCase(getOrdersByUserId.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getOrdersByUserId.fulfilled,(state,action)=>{
            state.isLoading = false
            state.orders = action.payload
            
        })
        .addCase(getOrdersByUserId.rejected,(state)=>{
            state.isLoading = false
            state.orderId = null
        })
        .addCase(getAllOrders.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllOrders.fulfilled,(state,action)=>{
            state.isLoading = false
            state.orders = action.payload
        })
        .addCase(getAllOrders.rejected,(state)=>{
            state.isLoading = false
            state.orderId = null
        })

    }
})

export default shoppingOrderSlice.reducer