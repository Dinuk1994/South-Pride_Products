import { createSlice } from "@reduxjs/toolkit";
import { addCartItems } from "../../api/cartAPI/addCartItems";
import toast from "react-hot-toast";
import { getCartItems } from "../../api/cartAPI/getCartItems";
import { deleteItem } from "../../api/cartAPI/deleteItem";
import { updateCartItem } from "../../api/cartAPI/updateCartItems";

const initialState = {
    cartItems: [],
    isLoading: false
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCartItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.cartItems = action.payload
                toast.success("Product added to cart")
            })
            .addCase(addCartItems.rejected, (state) => {
                state.isLoading = false
                toast.error("Prduct added failed")
            })
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.cartItems = action.payload
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(deleteItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.cartItems = action.payload
                toast.success("Product deleted from cart")
            })
            .addCase(deleteItem.rejected, (state) => {
                state.isLoading = false
                toast.error("Product delete failed")
            })
            .addCase(updateCartItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCartItem.fulfilled,(state,action)=>{
                state.isLoading = false
                state.cartItems = action.payload
                toast.success("Cart updated successfully")
            })
            .addCase(updateCartItem.rejected,(state)=>{
                state.isLoading = false 
                toast.error("Cart cannot be updated")
            })

    }
})

export default cartSlice.reducer;