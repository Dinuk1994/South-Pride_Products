import express from "express"
import { capturePayment, createOrder, findOrdersByUserId } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/create-order",createOrder)
orderRouter.post("/capture",capturePayment)
orderRouter.get("/find-orders-by-userId/:userId",findOrdersByUserId)

export default orderRouter

