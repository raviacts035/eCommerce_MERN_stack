import { Router } from "express";
import AuthRoles from "../utils/authRoles.js";
import { isLogedIn, authorized } from "../middlewares/authMiddleware.js";
import { getMyOrders,generateRazorpayOrderId,generateOrder,getAllOrders,updateOrderStatus } from '../controllers/orderController.js';


const orderRouter= Router();

// controllers will be added after testing
orderRouter.get('/',isLogedIn, getMyOrders);
orderRouter.get('/all',isLogedIn, authorized(AuthRoles.Admin),getAllOrders);
orderRouter.post('/generate/payment_id',isLogedIn,generateRazorpayOrderId);
orderRouter.post('/place/new',isLogedIn,generateOrder);
orderRouter.post('/update/status',isLogedIn,updateOrderStatus);

export default orderRouter