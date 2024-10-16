import mongoose from "mongoose";

const ShippingSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    fullName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
        
    },
    city : {
        type : String,
        required : true
    },
    phone :{
        type : Number,
        required : true
    },
    postalCode : {
        type : Number,
        required : true
    }
},{
    timestamps : true
})

const ShippingDetails = mongoose.model("ShippingDetails",ShippingSchema)

export default ShippingDetails