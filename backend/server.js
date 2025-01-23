import express from "express"
import dotenv from "dotenv"
import authRouts from "./routes/authRouts.routes.js"
import userRouts from "./routes/userRouts.routes.js"
import postRoutes from "./routes/postRouts.routes.js"
import notificationRoutes from "./routes/notificationRoute.routes.js"


import connectMongoDB from "./db/connect.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary"
dotenv.config()
// Cloudinaty config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDENAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const app=express();

app.use(express.json({limit:"5mb"}))  //Help to parse req.body
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/auth",authRouts)
app.use("/api/users",userRouts)
app.use("/api/posts", postRoutes);
app.use("/api/notification", notificationRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running on port 8000");
    connectMongoDB()
})