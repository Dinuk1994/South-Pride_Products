import mongoose from "mongoose";

const CartItemShema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    weight : {
        type : Number,
        required : true
    }
})

const shippingAddressSchema = new mongoose.Schema({
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    postalCode : {
        type : Number,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    cartItems : [CartItemShema],
    address : shippingAddressSchema,
    orderStatus :{
        type : String,
        required : true,
        default : "pending"
    },
    paymentMethod : {
        type : String,
        required : true
    },
    paymentStatus : {
        type : String,
        required : true,
        default : "pending"
    },
    totalPrice : {
        type : Number,
        required : true
    },
    orderDate : {
        type : Date,
        default : Date.now
    },
    orderUpdateDate : {
        type : Date,
        default : Date.now     
    },
    paymentId : {
        type : String,
       
    },
    payerId :{
        type : String,
        
    }
  
}, {
    timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
