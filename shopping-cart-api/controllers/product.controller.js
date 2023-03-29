const slugify = require("slugify");
const { Product } = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;

    // page  1 - 1 - 5
    // page 2 - 6 -  10
    // page 3 - 11 - 15
    const skipValue = page === 1 ? 0 : page * limit - limit + 1;
    const productCount = await Product.find().count();
    const products = await Product.find()
      .limit(limit)
      .skip(skipValue)
      .populate("category");
    res.send({
      status: true,
      payload: {
        total: productCount,
        data: products,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      slug: slugify(req.body.title).toLowerCase(),
      price: req.body.price,
      description: req.body.description,
      imageURL: req.body.imageURL,
      category: req.body.category,
    });
    const response = await product.save();
    res.send(response);
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const response = await Product.findById({ _id: productId });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const response = await Product.deleteOne({ _id: productId });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const response = await Product.findByIdAndUpdate(
      { _id: productId },
      {
        title: req.body.title,
        slug: slugify(req.body.title).toLowerCase(),
        price: req.body.price,
        description: req.body.description,
        imageURL: req.body.imageURL,
        category: req.body.category,
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
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
