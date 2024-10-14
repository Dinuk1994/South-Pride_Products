import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const updateCartItem = createAsyncThunk(
    "cart/updateCartItem",async({id , updatedItem} , thunkAPI)=>{
        try {
            const res = await fetch(`http://localhost:8000/api/cart/updateCart/${id}`,{
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(updatedItem)
            })
            if(!res.ok){
                throw new Error("Something went wrong")
            }

            const data = await res.json();
            toast.success("Product updated successfully")
            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)