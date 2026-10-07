import { instance } from "../app/app.js";
import crypto from "crypto";


export const processPayment = async (req, res) => {
  
  const options = {
  amount: req.body.amount,  // Amount is in currency subunits. 
  currency: "INR",
};
  const order = await instance.orders.create(options);

    res.status(200).json({
        message: "Payment Processed Successfully",
        success: true,
        order: order
    })
};


export const getKey = async (req, res) => {
    res.status(200).json({
        message: "Key Retrieved Successfully",
        success: true,
        key: process.env.RAZOR_KEY_ID
    })
}



export const paymentVerification = async (req, res) => {

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZOR_SECRET_KEY)
        .update(body)
        .digest("hex");

    console.log(`expectedSignature - ${expectedSignature}`);
    console.log(`rozerpay_signature - ${razorpay_signature}`);

    if (expectedSignature === razorpay_signature) {
        return res.status(200).json({
            message: "Payment verified successfully.",
            success: true
        });
    }

    return res.status(400).json({
        message: "Payment Verification Failed",
        success: false
    });
};
