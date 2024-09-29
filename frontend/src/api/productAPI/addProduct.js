import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProduct = createAsyncThunk(
   "product/addNewProduct", async(newProductData , thunkAPI)=>{
        try {
            const res = await fetch("http://localhost:8000/admin/add-product",{
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
            return data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)