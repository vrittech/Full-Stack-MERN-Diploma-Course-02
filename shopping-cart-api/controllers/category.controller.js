const { Category } = require("../models/category");
const slugify = require("slugify");
const { adminMiddleware } = require("../middleware");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.send(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const category = new Category({
      title: req.body.title,
      slug: slugify(req.body.title).toLowerCase(),
    });
    const response = await category.save();
    res.send(response);
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const response = await Category.findById({ _id: categoryId });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const response = await Category.deleteOne({ _id: categoryId });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const response = await Category.findByIdAndUpdate(
      { _id: categoryId },
      {
        slug: slugify(req.body.title).toLowerCase(),
        title: req.body.title,
      },
      {
        new: true,
      }
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
