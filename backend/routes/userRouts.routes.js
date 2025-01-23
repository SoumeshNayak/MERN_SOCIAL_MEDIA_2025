import express from "express"
import { protetRoute } from "../middleware/protect.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";

const router =express.Router();

router.get("/profile/:username",protetRoute,getUserProfile)
router.get("/suggested",protetRoute,getSuggestedUsers)
router.post("/follow/:id",protetRoute,followUnfollowUser)
router.post("/update",protetRoute,updateUserProfile)



export default router