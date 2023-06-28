import Order from "../modules/orderSchema.js";
import Product from "../modules/productSchema.js";
import Coupon from "../modules/couponSchema.js";
import razorpay from "../config/razorpay.config.js";
import asyncHandler from "../service/asyncHandler.js";
import customError from "../utils/CustomError.js";


// 1st part of placing order
// generates a razorpay order id
/**
 * requires : 
 * {
 * user(from isLoggedIn)
 * addrss,
 * phoneNumber,
 * products: [
 * {
 * name,
 * _id,
 * count,
 * coupon (if)
 * }],
 * }
 * 
 */
export const generateRazorpayOrderId =asyncHandler(async (req, res)=>{
    const {products, phoneNumber, coupon, address}= req.body;

    if (!products || products.length ==0 || !phoneNumber || !address){
        throw new customError("Required fields are missing", 406);
    }

    let totalAmount=0;

    // Total product price caliculation from DB only
    let productPriceCalc= Promise.all(
        products.map(async (product)=>{
            let productFromDb= await Product.find({_id: product._id})
            if (!productFromDb){
                throw new customError(`Product ${product.name} doesn't exist`, 404);
            }
            else if(productFromDb.stock < product.count){
                throw new customError("Requested amount of stock not avilable",406);
            }

            totalAmount+=productFromDb.price
        })
    )
    await productPriceCalc;
    // discount coupon caliculation part
    if (coupon){
        const couponFromDb= await Coupon.findOne({code: coupon, active: true});
        if (!couponFromDb){
            throw new customError("Coupon code is invalid/expired", 404);
        }

        totalAmount-=couponFromDb.discount;
    }

    const config_options={
        amount : Math.round(totalAmount * 1000),
        currency: "INR",
        reciept: `recipt_${new Date().getTime()}`
    }

    const order = await razorpay.orders.create(config_options)
    if (!order){
        throw new customError("");
    }

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({
        success : true,
        message: "Razorpay Order Id generated sucessfully",
        order
    })
})

// 2ns part of placing order, generating order with payment ID
export const generateOrder = asyncHandler(async (req, res)=>{
    var {transactionId, products, coupon,amount , address, phoneNumber } = req?.body;
    // const user = req?.user;
    // if (!user || !user.email){
    //     throw new customError("User are not authorized!!", 403)
    // }
    products=JSON.parse(products)
    // console.log(req.body)
    if (!transactionId || !products || !products.length || !address || !phoneNumber || !amount){
        throw new customError("Insufficient information to generate order",406)
    };
    if (!coupon) coupon=null;

    // Total product price caliculation from DB only
    amount=0;
    let priceCalc= Promise.all(
        products.map(async (product)=>{
            let productFromDb= await Product.findOne({_id:product.productId})
            if (!productFromDb){
                throw new customError(`Product doesn't exist`, 404);
            }
            else if(productFromDb.stock < product?.count){
                throw new customError("Requested amount of stock not avilable",406);
            }
            amount+=eval(productFromDb?.price)
            await productFromDb.save()
        })
        )

        await priceCalc;

    // verify transaction ID (skipped)
    const newOrder = await Order.create({
        product : products,
        // user: req?.user?._id,
        user:"649a58bd8aeaecbaf6ab15f0",
        phoneNumber,
        address,
        amount,
        transactionId,
        coupon
    })

    if (!newOrder){
        throw new customError("Something went wrong!!, unable to generate order",500);
    }
        
    // stock updation in DB
    let productStockUpdate= Promise.all(
        products.map(async (product)=>{
            let productFromDb= await Product.findOne({_id:product.productId})
            productFromDb.stock-=eval(product?.count);
            productFromDb.sold+=product?.count;
            await productFromDb.save()
        })
        )

        await productStockUpdate;

        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json({
            success: true,
            message:"Order Placed succesfully",
            newOrder
        })
})


// getMyOrders, get's all orders with user_id refference : USER SELF
export const getMyOrders= asyncHandler(async (req, res)=>{
    if (!req.user){
        throw new customError("You are not authorized",403)
    };

    const { _id : user_id}= req.user;
    const allOrders= await Order.find({user: user_id});

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({
        success: true,
        allOrders
    })
})

// all orders in DataBase :: ADMIN ONLY
export const getAllOrders= asyncHandler(async (req, res)=>{
    if (!req.user){
        throw new customError("You are not authorized",403)
    };

    const allOrders= await Order.find();

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({
        success: true,
        allOrders
    })
})


// Update Status of Order (ORDERED, SHIPPED,...) :ADMINI ONLY
export const updateOrderStatus =asyncHandler(async (req, res)=>{
    const {id: id}= req.params;
    const { status} =req.body
    if (!id || !status){
        throw new customError("Required fields are missing",406);
    }

    const orderToUpdate=await Order.findByIdAndUpdate(id, {status})

    if (!orderToUpdate){
        throw new customError("Unable to update Order status",500);
    }

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({
        success: true,
        message: "Order status Updated sucessfully"
    })

})