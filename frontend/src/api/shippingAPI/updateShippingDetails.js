import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const updateShippingDetails = createAsyncThunk(
    "shipping/updateShippingDetails", async ({ userId, shippingDetail }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/shipping/update-shipping-details/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(shippingDetail)
            })

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error)
            }
            toast.success("Shipping details updated successfully!", { className: 'z-50 mt-14' });
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)