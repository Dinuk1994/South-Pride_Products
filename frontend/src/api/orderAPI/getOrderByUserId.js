import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersByUserId = createAsyncThunk(
    "order/getOrderByUserId",async(id,thunkAPI)=>{
        try {
            const res = await fetch(`http://localhost:8000/api/shopping/order/find-orders-by-userId/${id}`,{
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