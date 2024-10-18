import { createAsyncThunk } from "@reduxjs/toolkit";

export const getShippingDetailById = createAsyncThunk(
    "shipping/getShippingDetailById", async (userId, thunkAPI) => {
        try {
            const res = await fetch(`/api/shipping/find-detail/${userId}`,{
                    credentials : "include",  
                    headers : {
                        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    }      
            })
            const data = await res.json();
            if(!res.ok){
                
                throw new Error(data.error)
               
            }            
            return data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)