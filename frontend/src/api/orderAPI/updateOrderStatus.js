import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateOrderStatus = createAsyncThunk(
    "order/updateOrderStatus", async ({orderId , orderStatus}, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/shopping/order/updateStatus/${orderId}`,{
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({orderStatus})
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