import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllOrders = createAsyncThunk(
    "order/getAllOrders", async (thunkAPI) => {
        try {
            const res = await fetch('http://localhost:8000/api/shopping/order/get-all-orders',{
                credentials : "include",
                headers : {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                }
            
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