import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",async({id},thunkAPI)=>{
        try {
            const res = await fetch(`/api/cart/getCart/${id}`,{
                credentials : "include",
                headers : {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                }
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error)
            }
            console.log(data);
            
            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)