import express from "express"
import { protetRoute } from "../middleware/protect.js";
import { deleteNotifications, getNotifications } from "../controllers/notification.controller.js";

const router=express.Router();

router.get("/",protetRoute,getNotifications)
router.delete("/",protetRoute,deleteNotifications)
export default router;