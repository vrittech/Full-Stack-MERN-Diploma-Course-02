const {
  getProducts,
  createProduct,
  getProductById,
} = require("../controllers/product.controller");

const productsRoutes = (app) => {
  // get all products
  app.get("/api/products", getProducts);

  // create single product
  app.post("/api/products", createProduct);

  // get single product
  app.get("/api/products/:productId", getProductById);

  // // delete single category
  // app.delete("/api/categories/:categoryId", deleteCategory);

  // // update single category
  // app.put("/api/categories/:categoryId", updateCategory);
};

module.exports.productsRoutes = productsRoutes;
