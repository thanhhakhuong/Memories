// handle data logic
// models crud
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import PostModel from "../models/PostModel.js";

// get all posts
export const getPosts = async (req, res) => {
  try {
    const post = await PostModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get post with id
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create new post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update existing post with id
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostModel.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export default router;
