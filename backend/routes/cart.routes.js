import express from "express"
import { addToCart, getCartItems, updateCartItems } from "../controller/cart.controller.js";


const cartRouter = express.Router();

cartRouter.post("/addToCart",addToCart)
cartRouter.get("/getCart/:userId",getCartItems)
cartRouter.post("/updateCart/:userId",updateCartItems)


export default cartRouter;