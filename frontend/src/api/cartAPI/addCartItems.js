import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCartItems = createAsyncThunk(
    "cart/addCartItems", async(userId,productId,quantity,selectedWeight , thunkAPI)=>{
        try {
            
            const res = await fetch("/api/cart/addToCart",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({userId,productId,quantity,selectedWeight})              
            })
            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error)
            }

            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)