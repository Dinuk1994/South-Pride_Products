 
import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../../api/productAPI/addProduct";
import toast from "react-hot-toast";
import { allProducts } from "../../../api/productAPI/allProducts";
import { updateProduct } from "../../../api/productAPI/updateProduct";
import { removeProduct } from "../../../api/productAPI/deleteProduct";

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
                toast.success("Product added Successfull")
              
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
            })     
            .addCase(allProducts.rejected,(state,action)=>{
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(updateProduct.pending,(state=>{
                state.isLoading = true
            }))
            .addCase(updateProduct.fulfilled,(state,action)=>{
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(updateProduct.rejected,(state,action)=>{
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(removeProduct.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(removeProduct.fulfilled,(state,action)=>{
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(removeProduct.rejected,(state,action)=>{
                state.isLoading = false
                toast.error(action.payload)
            })
    }
})

export default adminProductSlice.reducer;