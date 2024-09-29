/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../../api/productAPI/addProduct";
import toast from "react-hot-toast";
import { allProducts } from "../../../api/productAPI/allProducts";

const initialState = {
    isLoading: false,
    products: []
}

const adminProductSlice = createSlice({
    name: "adminProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addProduct.fulfilled , (state,action)=>{
                state.isLoading = false,
                state.products= action.payload
                console.log(action.payload);            
                toast.success("Product added successfull")
            })
            .addCase(addProduct.rejected,(state,action)=>{
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(allProducts.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(allProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                console.log("Fetched products:", action.payload);  
            })
            
            .addCase(allProducts.rejected,(state,action)=>{
                state.isLoading = false
                toast.error(action.payload)
            })
    }
})

export default adminProductSlice.reducer;