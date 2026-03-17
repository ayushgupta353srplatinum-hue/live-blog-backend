const express = require("express");
const router = express.Router()

const Post = require("../models/Post")
const User = require("../models/User")
// Create User (helper route)
router.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create Post
router.post("/", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get All Posts with Author (populate)
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().populate("authorId");
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Top 3 Recent Posts
router.get("/top", async (req, res) => {
    try {
        const posts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .populate("authorId");

        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

