import express from "express"
import { createOrder } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/create-order",createOrder)

export default orderRouter

