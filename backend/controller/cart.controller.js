import express from "express"
import Cart from "../model/cart.model.js";


export const addToCart = async(req,res)=>{
   try {
    const {userId , productId , quantity} = req.body;


   } catch (error) {
    return res.status(500).json({msg : "Internal Server Error"})
   } 
}