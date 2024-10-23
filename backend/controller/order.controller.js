import Cart from "../model/cart.model.js";
import cart from "../model/cart.model.js";
import Order from "../model/order.model.js";
import paypal from "../payments/paypal.js"
export const createOrder = async(req,res)=>{
    try {
        const{userId , cartItems, address, orderStatus , paymentMethod , paymentStatus, totalPrice,orderDate, orderUpdateDate,paymentId,payerId} =req.body ; 

        const createPaymentJson = {
            intent : 'sale',
            payer : {
                payment_method : 'paypal',
            },
            redirect_urls : {
                return_url : 'http://localhost:5173/shopping/paypal-return',
                cancel_url : 'http://localhost:5173/shopping/paypal-cancel',
            },
            transactions : [
                {
                    item_list : {
                        items : cartItems.map((item)=>({
                            name : item.title,
                            sku : item.productId,
                            price : item.salePrice.toFixed(2),
                            currency : 'USD',
                            quantity : item.quantity
                        }))
                    },
                    amount : {
                        currency : "USD",
                        total : totalPrice.toFixed(2)
                    },
                    description : 'Payment for items in cart'
                }
            ]
        }

        paypal.payment.create(createPaymentJson,async(error,paymentInfo)=>{
            if(error){
                console.log(error);
                return res.status(400).json({msg : "Error while creating paypal payment",error})
            }else{
                const newOrder = new Order({
                    userId,
                    cartItems,
                    address,
                    orderStatus,
                    paymentMethod,
                    paymentStatus,
                    totalPrice,
                    orderDate,
                    orderUpdateDate,
                    paymentId,
                    payerId
                })

                await newOrder.save();
                const approvalURL = paymentInfo.links.find((link)=>link.rel === 'approval_url').href;
                res.status(200).json({approvalURL , orderId : newOrder._id , msg:"success"})
            }
        })
    
    } catch (error) {
        return res.status(500).json({msg : "Internal server error"})
    }
}



export const capturePayment = async (req, res) => {
    try {
        const { paymentId, orderId, payerId } = req.body;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }
        order.paymentStatus = "paid";
        order.orderStatus = "confirmed";
        order.paymentId = paymentId;
        order.payerId = payerId;

        const userId = order.userId;
        const cart = await Cart.findOneAndDelete({ userId });

        if (!cart) {
            return res.status(404).json({ msg: "Cart not found" });
        }

        await order.save();
        return res.status(200).json({ msg: "Payment captured successfully" });

    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
}
