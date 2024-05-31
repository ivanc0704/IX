const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
    try {
      const blog = new Blog({
        authorId: req.body.authorId,
        categoryIds: req.body.categoryIds,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        content: req.body.content,
      });
      const newBlog = await blog.save();
      res.status(201).json({ message: "New blog created!", data: newBlog });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  
  const getBlogs = async (req, res) => {

    const blogs = await Blog.find();
    res.status(200).json({
      message: "Get all blogs!",
      data: blogs,
    });
  };
  
  const getBlogById = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Get blog by ID!",
      data: [],
    });
  };
  
  const getBlogsByCategoryID = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Get blogs by categoryID!",
      data: [],
    });
  };
  
  const updateBlogByID = (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog updated!",
      data: [],
    });
  };
  
  const deleteBlogByID = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog deleted!",
      data: [],
    });
  };
  
  module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    getBlogsByCategoryID,
    updateBlogByID,
    deleteBlogByID,
  };
  