import express from "express"
import { addProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.get("/add-product",addProduct)
export default productRouter;