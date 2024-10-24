import { createAsyncThunk } from "@reduxjs/toolkit";

export const capturePayment = createAsyncThunk(
    "order/capturePayment", async (paymentData, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8000/api/shopping/order/capture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            
            })

            const data = await response.json();

            if(!response.ok){
                throw new Error(data.error)
            }


            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)