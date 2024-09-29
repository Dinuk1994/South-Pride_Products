import express from "express"
import { addProduct, allProducts, deleteById, getProductById, updateProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add-product",addProduct)
productRouter.get("/all-products",allProducts)
productRouter.get("/find-product/:id", getProductById)
productRouter.put("/update-product/:id",updateProduct)
productRouter.delete("/delete-product/:id", deleteById)
export default productRouter;