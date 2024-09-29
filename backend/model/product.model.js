import express from "express"
import mongoose from "mongoose"

const weightStockSchema = mongoose.Schema({
    weight : {
        type : Number,
        required : true
    
    },
    stockQty : {
        type : Number,
        required : true
    }
    ,salePrice : {
        type : Number,
        required : true
    }
})

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    images : {
        type : [],
        required : true
    },
    weightStock : [weightStockSchema]
},{
    timestamps : true
})

const Product = mongoose.model("Product" , productSchema);
export default Product