import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, newUpdatedData }, thunkAPI) => {
        try {
            const res = await fetch(`/api/admin/update-product/${id}`, {
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
            toast.success("Product updated successfully");
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
