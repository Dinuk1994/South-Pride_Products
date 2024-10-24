import express from "express"
import { capturePayment, createOrder, findOrdersByUserId, getAllOrders, updateOrderStatus } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/create-order",createOrder)
orderRouter.post("/capture",capturePayment)
orderRouter.get("/find-orders-by-userId/:userId",findOrdersByUserId)
orderRouter.get("/get-all-orders",getAllOrders)
orderRouter.put("/updateStatus/:orderId",updateOrderStatus)

export default orderRouter

