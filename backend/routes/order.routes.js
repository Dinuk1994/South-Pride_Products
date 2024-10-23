import express from "express"
import { capturePayment, createOrder } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/create-order",createOrder)
orderRouter.post("/capture",capturePayment)

export default orderRouter

