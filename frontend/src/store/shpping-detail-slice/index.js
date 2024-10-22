import { createSlice } from "@reduxjs/toolkit";
import { getShippingDetailById } from "../../api/shippingAPI/getShippingDetails";
import { addShippingDetails } from "../../api/shippingAPI/addShippingDetails";
import { updateShippingDetails } from "../../api/shippingAPI/updateShippingDetails";

const initialState = {
    shippingDetail : {},
    isLoading : false
}

const shippingDetailSlice = createSlice({
    name: "shippingDetail",
    initialState , 
    reducers: {},
    extraReducers :(builder)=>{
        builder
        .addCase(getShippingDetailById.pending,(state)=>{
            state.isLoading = true           
        })
        .addCase(getShippingDetailById.fulfilled,(state,action)=>{
            state.isLoading = false
            state.shippingDetail = action.payload
       
        })
        .addCase(getShippingDetailById.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(addShippingDetails.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addShippingDetails.fulfilled,(state,action)=>{
            state.isLoading = false
            state.shippingDetail = action.payload

        })
        .addCase(addShippingDetails.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(updateShippingDetails.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(updateShippingDetails.fulfilled,(state,action)=>{
            state.isLoading = false
            state.shippingDetail = action.payload
     
        })
        .addCase(updateShippingDetails.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default shippingDetailSlice.reducer