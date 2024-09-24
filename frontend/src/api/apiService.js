import { createAsyncThunk } from "@reduxjs/toolkit"

export const registerUser = createAsyncThunk(
    "auth/register", async (userdata, thunkAPI) => {
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            })

            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error)
            }
            return data;
             
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }

)