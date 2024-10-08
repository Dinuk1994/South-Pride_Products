import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const addProduct = createAsyncThunk(
   "product/addNewProduct", async(newProductData , thunkAPI)=>{
        try {
            const res = await fetch("/api/admin/add-product",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body :JSON.stringify(newProductData)

            })

            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error)
            }
            toast.success("Product added successfull")
            return data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)