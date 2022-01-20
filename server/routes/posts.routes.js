// connect api endpoint to route requests controllers / handlers functions

import express from "express";
import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.patch("/:id/likePost", likePost);
router.delete("/:id", deletePost);

export default router;
