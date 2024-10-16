import express from "express"
import { addShippingDetails, allShippingDetails, deleteShippingDetails, updateShippingDetails } from "../controller/shipping.controller.js"

const shippingRouter = express.Router()

shippingRouter.post("/add-shipping-details",addShippingDetails)
shippingRouter.get("/all-shipping-details",allShippingDetails)
shippingRouter.put("/update-shipping-details/:userId",updateShippingDetails)
shippingRouter.delete("/delete-shipping-details/:userId",deleteShippingDetails)

export default shippingRouter