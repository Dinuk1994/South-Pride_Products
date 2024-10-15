import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteItem = createAsyncThunk(
    "cart/deleteItem" ,async({userId , productData},thunkAPI)=>{
        try {
            console.log("Deleting cart item with id:", userId , productData)
            const res = await fetch(`http://localhost:8000/api/cart/deleteCartItem/${userId}`,{
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    cartItems : [productData]
                })        
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