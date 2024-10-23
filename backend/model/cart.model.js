import mongoose from "mongoose"

const CartItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    weight : {
        type : Number,
        required : true
    },
    salePrice : {
        type : Number,
        required : true
    }


})


const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    cartItems: [CartItemSchema],
},
    { timestamps: true }
)

const Cart = mongoose.model("Cart", CartSchema)
export default Cart;