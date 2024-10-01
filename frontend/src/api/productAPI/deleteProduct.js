import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const removeProduct = createAsyncThunk(
    "product/deleteProduct",async({id},thunkAPI)=>{
        try {          
            const res =await fetch(`/api/admin/delete-product/${id}`,{
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error)
            }

            toast.success("Product Deleted!")
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)