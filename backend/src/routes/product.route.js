import { Router } from "express";
import { processPayment , getKey} from "../controllers/productController.js";

const router = Router();

router.post("/payment/process", processPayment);

router.get("/payment/key", getKey);

export default router;