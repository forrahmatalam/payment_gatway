import { instance } from "../app/app.js";


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