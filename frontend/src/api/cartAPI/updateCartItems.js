import { createAsyncThunk } from "@reduxjs/toolkit";


export const updateCartItem = createAsyncThunk(
    "cart/updateCartItem", async ({ userId, updatedCartItem }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/cart/updateCart/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cartItems: [updatedCartItem]
                })
            })
            if (!res.ok) {
                throw new Error("Something went wrong")
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)