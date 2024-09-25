/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../api/registerUser";
import toast from "react-hot-toast";
import { loginUser } from "../../api/loginUser";
import { checkAuth } from "../../api/checkAuth";

const initialState = {
    isAuthenticate: false,
    isLoading: false,
    user: null,
    error: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticate = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticate = true;
                state.user = action.payload
                toast.success("User Registerd Successfull")

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticate = false;
                state.user = null
                state.error = action.payload;
                toast.error(action.payload); 
            })
            .addCase(loginUser.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isAuthenticate = true;
                state.user = action.payload.user
                toast.success("Login Successfull")
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.isLoading = false;
                state.isAuthenticate = false;
                state.user = null
                state.error = action.payload;              
                toast.error("Invalid Credentials");
            })
            .addCase(checkAuth.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(checkAuth.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isAuthenticate = true;
                state.user = action.payload.user
               // toast.success(" Successfull")
            })
            .addCase(checkAuth.rejected,(state,action)=>{
                state.isLoading = false;
                state.isAuthenticate = false;
                state.user = null
                state.error = action.payload;              
               // toast.error("Invalid Credentials");
            })
            
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer