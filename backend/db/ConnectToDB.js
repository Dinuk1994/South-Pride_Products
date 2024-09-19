import express from "express"
import mongoose from "mongoose"

const ConnectToDB=async=>{
    try {
        mongoose.connect(process.env.MONGODB);
        console.log("Connected to Database");
        
    } catch (error) {
        console.log("Error Connecting Database",error);
        
    }
}

export default ConnectToDB;