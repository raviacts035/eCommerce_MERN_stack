import Coupon from "../modules/couponSchema.js";
import asyncHandler from "../service/asyncHandler.js";
import customError from "../utils/CustomError.js";


// create coupon, requires -> code && discount
export const createCoupon = asyncHandler(async (req, res)=>{
    const { code, discount }= req.body;

    // validation 
    if (!code || !discount){
        throw new customError("Code and Discount ar required", 406);
    }

    const NewCoupon = await Coupon.create({
        code,
        discount
    })

    res.status(200).json({
        sucess : true,
        message: "Coupon created sucessfully",
        NewCoupon
    })
})

// update coupon to activate or deactive coupons
export const updateCoupon=asyncHandler(async (req, res)=>{
    const { id:couponId }=req.params
    const {action }= req.body

    if (!couponId || !action){
        throw new customError("Coupon ID and action is required", 406)
    }

    const couponToUpdate= await Coupon.findByIdAndUpdate(
        couponId,
        {
            active: action
        },
        {
            new: true,
            runValidators: true
        });

    if (!couponToUpdate){
        throw new customError("Coupon not found", 404);
    }

    res.status(200).json({
        sucess : true,
        message : "Coupon updated sucessfully"
    })
})

// Delete coupon 
export const deleteCoupon=asyncHandler(async (req, res)=>{
    const {id:couponId}=req.params

    if (!couponId){
        throw new customError("Coupon Id is required", 406)
    }

    const couopnToDel=await Coupon.findByIdAndDelete(couponId)
    if (! couponId){
        throw new customError("Coupon not found!!", 404)
    }

    res.status(200).json({
        sucess: true,
        message:"Sucessfully deleted coupon"
    })
})

// get Coupons, will fetch all avilable coupouns
export const getCoupon = asyncHandler(async (req, res)=>{
    const coupons= await Coupon.find();

    if (!coupons.length){
        throw new customError("Coupon list is empty", 302);
    }

    res.status(200).json({
        sucess: true,
        coupons
    })

})