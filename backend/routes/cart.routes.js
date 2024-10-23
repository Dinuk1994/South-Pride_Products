import express from "express"
import { addToCart, deleteCart, deleteCartItem, getCartItems, updateCartItems } from "../controller/cart.controller.js";


const cartRouter = express.Router();

cartRouter.post("/addToCart",addToCart)
cartRouter.get("/getCart/:userId",getCartItems)
cartRouter.put("/updateCart/:userId",updateCartItems)
cartRouter.delete("/deleteCartItem/:userId" ,deleteCartItem)
cartRouter.delete("/deleteCart/:userId",deleteCart)


export default cartRouter;