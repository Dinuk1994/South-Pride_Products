import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, newUpdatedData }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8000/api/admin/update-product/${id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUpdatedData),
            });

            if (!res.ok) {
                throw new Error("Failed to update product");
            }

            const data = await res.json();
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
