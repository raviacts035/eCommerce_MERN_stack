import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import fileUpload from 'express-fileupload';
import cloudinary from "cloudinary";
import config from "./config/index.js";

const app=express();

cloudinary.config({ 
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret
  });

  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp"
}));

//Home Route
app.get("/", (_req,res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true);
    return res.status(200).json({
        message: "Hello from ravi's eCommerce app"
    })
})

app.use("/api", router);
//test route
app.post("/post/test", (req,res)=>{
    console.log("key "+process.env.api_key)
    console.log(req.files)
    let file=req?.files?.raviFile
    cloudinary.v2.uploader.upload(file.tempFilePath,
    { public_id: "olympic_flag" }, 
    function(error, result) {console.log(result); });
    
    res.send(req.body)
})

app.all("*", (_req,res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true);
    return res.status(404).json({
        success: false ,
        message : "Unable to find the path requested"
    })
})

export default app