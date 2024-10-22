import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
    "order/createOrder", async (orderData, thunkAPI) => {
        try {

            const res = await fetch("http://localhost:8000/api/shopping/order/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
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