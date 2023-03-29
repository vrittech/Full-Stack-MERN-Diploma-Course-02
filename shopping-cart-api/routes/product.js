const {
  getProducts,
  createProduct,
} = require("../controllers/product.controller");

const productsRoutes = (app) => {
  // get all products
  app.get("/api/products", getProducts);

  // create single product
  app.post("/api/products", createProduct);

  // get single category
  // app.get("/api/categories/:categoryId", getCategoryById);

  // // delete single category
  // app.delete("/api/categories/:categoryId", deleteCategory);

  // // update single category
  // app.put("/api/categories/:categoryId", updateCategory);
};

module.exports.productsRoutes = productsRoutes;
