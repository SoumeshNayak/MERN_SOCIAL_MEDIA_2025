import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
export const protetRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
    if(!token){
        return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }
    const decode=jwt.verify(token,process.env.JWT_SEC)
    if(!decode){
        return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }
    const user=await User.findById(decode.userId).select("-password")
    if(!user){
        return res.status(404).json({ error: "User not found" });
    }
    req.user=user;
    next()
    } catch (error) {
        console.log("Error in protectRoute middleware", err.message);
		return res.status(500).json({ error: "Internal Server Error" });
    }
}