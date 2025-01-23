import express from "express"
import { protetRoute } from "../middleware/protect.js";
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPost, getUserPosts, likeUnlikePost } from "../controllers/post.controller.js";

const router=express.Router();

router.get("/allPosts",protetRoute,getAllPosts)
router.get("/likes/:id",protetRoute,getLikedPost)
router.get("/follow",protetRoute,getFollowingPosts)
router.get("/user/:username",protetRoute,getUserPosts)

router.post("/create",protetRoute,createPost)
router.post("/like/:id",protetRoute,likeUnlikePost)
router.post("/comment/:id",protetRoute,commentOnPost)
router.delete("/delete/:id",protetRoute,deletePost)


export default router