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

const cart = mongoose.model("Cart", CartSchema)
export default cart;