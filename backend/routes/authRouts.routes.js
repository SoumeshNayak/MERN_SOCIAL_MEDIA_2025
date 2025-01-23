import express from "express"
import { getMe, loginContoller, logoutController, signUpController } from "../controllers/auth.controller.js";
import { protetRoute } from "../middleware/protect.js";

const router=express.Router();

router.get("/me",protetRoute,getMe)
router.post("/signup",signUpController)

router.post("/login",loginContoller)

router.post("/logout",logoutController)

export default router