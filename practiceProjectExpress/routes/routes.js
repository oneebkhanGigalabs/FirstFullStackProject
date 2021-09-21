const express = require("express");
const blogsController = require("../controllers/blogs.controller");

const router = express.Router();

//create a new blog
router.post("/", blogsController.createBlog);

//get all blogs
router.get("/", blogsController.getAllBlogs);

//get blog by id
router.get("/:id", blogsController.getOneBlogs);

//update a blog by id number
router.put("/:id", blogsController.updateBlog);

//delete a blog by id
router.delete("/:id", blogsController.deleteBlog);

module.exports = router;
