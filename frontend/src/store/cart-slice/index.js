import { createSlice } from "@reduxjs/toolkit";
import { addCartItems } from "../../api/cartAPI/addCartItems";
import toast from "react-hot-toast";

const initialState = {
    cartItems : [],
    isLoading : false
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(addCartItems.pending , (state)=>{
            state.isLoading = true          
        })
        .addCase(addCartItems.fulfilled , (state,action)=>{
            state.isLoading = false
            state.cartItems = action.payload
            toast.success("Product added to cart")
        })
        .addCase(addCartItems.rejected ,(state)=>{
            state.isLoading = false
            toast.error("Prduct added failed")
        })

    }
})

export default cartSlice.reducer;