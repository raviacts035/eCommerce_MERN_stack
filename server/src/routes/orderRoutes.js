import { Router } from "express";
import { isLogedIn } from "../middlewares/authMiddleware.js";
import { getMyOrders,generateRazorpayOrderId,generateOrder,getAllOrders,updateOrderStatus } from '../controllers/orderController.js';


const orderRouter= Router();

// controllers will be added after testing
orderRouter.get('/',getMyOrders);
orderRouter.get('/all',getAllOrders);
orderRouter.post('/generate/payment_id',generateRazorpayOrderId);
orderRouter.post('/place/new',generateOrder);
orderRouter.post('/update/status',updateOrderStatus);

export default orderRouter