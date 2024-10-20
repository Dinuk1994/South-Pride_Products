import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    shippingDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShippingDetails",
        required: true
    },
    totalAmount: {
        type: Number,
        required: true 
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['credit_card', 'paypal', 'cash_on_delivery'],
        default: 'cash_on_delivery'
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryDate: {
        type: Date
    }
}, {
    timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
