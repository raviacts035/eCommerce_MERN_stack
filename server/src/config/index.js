import dotenv from "dotenv"

dotenv.config()

const config ={
    PORT:process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://0.0.0.0/ecom",
    JWT_SECRET: process.env.JWT_SECRET || "Raveendra",
    JWT_EXPIRY: process.env.JWT_EXPIRY || '1d',

    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,

    SMTP_MAIL_HOST: process.env.SMTP_MAIL_HOST ,
    SMTP_Mail_PORT: process.env.SMTP_Mail_PORT || 2525,
    SMTP_MAIL_USERNAME: process.env.SMTP_MAIL_USERNAME ,
    SMTP_MAIL_PASSWORD:process.env.SMTP_MAIL_PASSWORD ,
    SMTP_SENDER_EMAIL:process.env.SMTP_SENDER_EMAIL ,
    
    RAZOR_PAY_KEYID : process.env.api_key || "razorpay_id",
    RAZOR_PAY_SECRET : process.env.api_secret || "razorpay_secret",

}

export default config