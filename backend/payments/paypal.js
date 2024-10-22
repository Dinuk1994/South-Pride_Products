import paypal from 'paypal-rest-sdk'
import dotenv from "dotenv"

dotenv.config()

// console.log("PayPal Client ID:", process.env.PAYPAL_CLIENT_ID);
// console.log("PayPal Client Secret:", process.env.PAYPAL_CLIENT_SECRET);

paypal.configure({
    'mode': 'sandbox',
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET,
 
})

export default paypal;