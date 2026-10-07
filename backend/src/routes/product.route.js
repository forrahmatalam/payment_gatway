import { Router } from "express";

import { processPayment } from "../controllers/productController.js";

const router = Router();

router.post("/payment/process", processPayment);

export default router;