import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import productRoute from "../routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json());

// Instantiate Razorpay
var instance = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_SECRET_KEY
});

// Payment routes
app.use("/api", productRoute);

export default app;