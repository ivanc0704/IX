const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, (req, res) => {
  blogController.createBlogs(req, res);
});

router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  blogController.getBlog(req, res);
});

router.put("/:id", protect, (req, res) => {
  blogController.updateBlog(req, res);
});

router.delete("/:id", protect, (req, res) => {
  blogController.deleteBlog(req, res);
});

module.exports = router;
