import { createAsyncThunk } from "@reduxjs/toolkit";


export const checkAuth = createAsyncThunk(
    'auth/checkAuth', 
    async (thunkAPI) => {
        try {
            const res = await fetch("/api/auth/check-auth", {
                credentials: 'include', 
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Expires': '0'
                }
            });
            
            const data = await res.json();
            console.log(data);     
            if (!res.ok) {
                throw new Error(data.error);
            }
            return data;
            
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
