import { getCoupon, createCoupon, updateCoupon, deleteCoupon } from "../controllers/couponController";
import isLogedIn, { authorized } from "../middlewares/authMiddleware";
import {Router } from "express";
import AuthRoles from "../utils/authRoles";

const couponRoutes = Router()

couponRoutes.get("/", isLogedIn, authorized(AuthRoles.Admin), getCoupon);
couponRoutes.post("/new",isLogedIn, authorized(AuthRoles.Admin), createCoupon)
couponRoutes.post("update/:id", isLogedIn, authorized(AuthRoles.Admin), updateCoupon);
couponRoutes.get("delete/:id", isLogedIn, authorized(AuthRoles.Admin), deleteCoupon);


export default couponRoutes; 