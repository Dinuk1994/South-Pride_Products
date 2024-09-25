import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    'auth/login' , async (loginData , thunkAPI )=>{
        try {
            const res = await fetch("/api/auth/login",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(loginData)

            });

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