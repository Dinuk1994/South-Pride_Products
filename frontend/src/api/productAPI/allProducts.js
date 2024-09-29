import { createAsyncThunk } from "@reduxjs/toolkit";

export const allProducts = createAsyncThunk(
    "product/getAllProducts" ,async(thunkAPI)=>{
        try {
            const res = await fetch("/api/admin/all-products",{
                credentials : "include",
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Expires': '0'
                }
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error)
            }
            return data
            
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)