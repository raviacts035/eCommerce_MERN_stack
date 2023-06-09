import { Router } from "express";
import authRouter from "./authRoutes.js";
import productRouter from "./productRoutes.js";
import couponRoutes from "./couponRoutes.js";
import collectionRoutes from "./collectionRoutes.js";
import orderRouter from "./orderRoutes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/coupon",couponRoutes);
router.use("/collections",collectionRoutes);
router.use('/orders',orderRouter);

export default router