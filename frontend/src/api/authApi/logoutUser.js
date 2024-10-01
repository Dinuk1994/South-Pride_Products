import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const logoutUser = createAsyncThunk(
    'auth/logout' , async (thunkAPI) => {
        try {
            const res = await fetch("/api/auth/logout",{
                method : "POST",
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Expires': '0'
                }
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error)
            }
            toast.success("User logout success!")
            return data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)