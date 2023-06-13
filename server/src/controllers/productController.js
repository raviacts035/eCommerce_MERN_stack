import Product from "../modules/productSchema.js";
import asyncHandler from "../service/asyncHandler.js";
import mongoose from "mongoose";
import CustomError from "../utils/CustomError.js";
import cloudinary from "cloudinary";


export const addProduct =asyncHandler(async (req,res)=>{
    const productId= new mongoose.Types.ObjectId().toHexString();
    console.log("product ID : "+productId)

    const { name, price, discription, stock, collectionId} = req.body;
    if(!name || !price || !discription || !stock || !collectionId ){
        throw new CustomError("Enter all required product fields", 500)
    }

    let productImages = [];
    if (req.files) {
        console.log("from inside if")
        let {Images} = req.files;
        console.log(Images)
        for (const productImage in Images) {
            // console.log(Images[productImage].tempFilePath)
            let cloudinaryResult = await cloudinary.v2.uploader.upload(Images[productImage].tempFilePath, {
                overwrite: true,
                folder: `${collectionId}/${productId}`
            });
            // console.log(cloudinaryResult);
            productImages.push({
                publicID: cloudinaryResult.public_id,
                secureURL: cloudinaryResult.secure_url
            })
        }
    }
    console.log({
        _id: productId,
        name,
        price: price,
        discription: discription,
        photos: productImages,
        stock,
        sold: 0,
        collectionId,
    })
    // creating entry into DATABASE for new product
    const product =await Product.create({
        _id: productId,
        name: name,
        price: price,
        discription: discription,
        photos: productImages,
        stock,
        sold: 0,
        collectionId,
    })
    if (!product){
        throw new CustomError("Unable to create new product entry in DB", 500);
    }

    res.status(200).json({
        success:true ,
        product
    })

})


// update Products
export const updateProduct = asyncHandler(async (req, res) => {

    const { name, price, discription, stock, collectionId} = req.body;
    if(!name || !price || !discription || !stock || !collectionId ){
        throw new CustomError("Enter all required fields", 500)
    }

    let{Id: productID }=req.params;
    if (!productID) throw new CustomError("Product ID is required in request params :(", 400);

    const productToUpdate = await Product.findById(productID);
    if (!productToUpdate) throw new CustomError("Unfortunately! We couldn't find that resource :(", 400);

    let productImages = [];

    if (req.files) {
        //Destroy the Existing Product Images in the Cloudinary
        productToUpdate?.productImages?.map(async (image) => await cloudinary.v2.uploader.destroy(image?.publicID));
        
        let Images = req.files;

        for (const productImage in Images) {
            console.log(Images[productImage].tempFilePath)
            let cloudinaryResult = await cloudinary.v2.uploader.upload(Images[productImage].tempFilePath, {
                folder: `${collectionID}/${productID}`
            });
            console.log(cloudinaryResult);
            productImages.push({
                publicID: cloudinaryResult.public_id,
                secureURL: cloudinaryResult.secure_url
            })
        }
    }

    
    const updatedProduct = await Product.findByIdAndUpdate(productID, {
        name: name,
        price:price,
        discription: discription,
        photos: productImages,
        stock,
        sold: 0,
        collectionId,
    }, {runValidators: false, new: false});

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.status(200).json({
        success: true,
        message: `Product is updated successfully :)`,
        updatedProduct
    });
});

// getProducts 
export const getProducts =asyncHandler(async (req,res)=>{
    const products =await Product.find({});

    if(!products){
        throw new CustomError("No products avilable", 404)
    }

    res.status(200).json({
        success:true,
        products
    })
})

// finding product by ID in request url/parameter 
export const getProductById =asyncHandler(async (req,res)=>{
    let{Id: productId }=req.params;

    if(!productId){
        throw new CustomError("Product Id is required", 500)
    }

    const products =Product.findById(productId);

    if(!products){
        throw new CustomError("No products avilable", 404)
    }

    res.status(200).json({
        success:true,
        products
    })
})

export const getProductsByCollectionId= asyncHandler(async (req, res)=>{
    let {id:collectionId} =req.params;


    if(!collectionId){
        throw new CustomError("Collection ID is required", 500)
    }

    const products =Product.find({collectionId});

    if(!products){
        throw new CustomError("No products avilable", 404)
    }

    res.status(200).json({
        success:true,
        products
    })
})

export const deleteProduct=asyncHandler(async (req,res)=>{
    let{Id: productId }=req.params;

    if(!productId){
        throw new CustomError("Product Id is required", 500)
    }

    const productToDelete =await Product.findByIdAndDelete(productId);
    console.log(productToDelete)
    if(!productToDelete){
        throw new CustomError("No product found", 404);
    }

    productToDelete?.productImages?.map(async (image) => await cloudinary.v2.uploader.destroy(image?.publicID));

    res.status(200).json({
        success:true,
        message:"Product deleted sucessfully"
    })
})