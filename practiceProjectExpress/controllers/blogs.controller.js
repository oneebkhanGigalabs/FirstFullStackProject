const Blogs = require("../models/models");
const BlogsModel = require("../models/models");

//get all the blogs
exports.getAllBlogs = async function (req, res) {
  const blog = await BlogsModel.find({});

  try {
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
};

//create a blog
exports.createBlog = async function (req, res) {
  const blog = new BlogsModel(req.body);

  try {
    await blog.save();
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get one blog by id
exports.getOneBlogs = async function (req, res) {
  const blog = await BlogsModel.findById(req.params.id);

  if (blog) {
    res.status(200).send(blog);
  } else {
    res
      .status(404)
      .send("The object of id:" + req.params.id + " could not be found");
  }
};

//update a blog by using the id
exports.updateBlog = async function (req, res) {
  const findBlog = await BlogsModel.findById(req.params.id);
  if (findBlog) {
    const blog = await BlogsModel.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .send(
        "The object of id:" + req.params.id + " has been successfully deleted"
      );
  } else {
    res
      .status(404)
      .send("The object of id:" + req.params.id + " could not be found");
  }
};

//delete a blog by id
exports.deleteBlog = async function (req, res) {
  const findBlog = await BlogsModel.findById(req.params.id);
  if (findBlog) {
    const blog = await BlogsModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send(
        "The object of id:" + req.params.id + " has been successfully deleted"
      );
  } else {
    res
      .status(404)
      .send("The object of id:" + req.params.id + " could not be found");
  }
};
