import { getCoupon, createCoupon, updateCoupon, deleteCoupon } from "../controllers/couponController.js";
import {isLogedIn, authorized } from "../middlewares/authMiddleware.js";
import {Router } from "express";
import AuthRoles from "../utils/authRoles.js";

const couponRoutes = Router()

couponRoutes.get("/", isLogedIn, authorized(AuthRoles.Admin), getCoupon);
couponRoutes.post("/new",isLogedIn, authorized(AuthRoles.Admin), createCoupon)
couponRoutes.post("update/:id", isLogedIn, authorized(AuthRoles.Admin), updateCoupon);
couponRoutes.delete("delete/:id", isLogedIn, authorized(AuthRoles.Admin), deleteCoupon);


export default couponRoutes; 