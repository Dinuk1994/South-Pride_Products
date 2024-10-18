import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const addShippingDetails = createAsyncThunk(
    "shipping/addShippingDetails", async (shippingDetail, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:8000/api/shipping/add-shipping-details",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(shippingDetail)
            })

            const data = await res.json();
            

            if(!res.ok){
                toast.error("Shipping detail already exists to this user")
                throw new Error(data.error)
            }
            toast.success("Shipping detail added success!")
            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)