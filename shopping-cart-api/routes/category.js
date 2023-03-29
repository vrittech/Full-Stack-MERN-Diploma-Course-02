const {
  getCategories,
  createCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

const categoriesRoutes = (app) => {
  // get all ctegories
  app.get("/api/categories", getCategories);

  // create single category
  app.post("/api/categories", createCategory);

  // get single category
  app.get("/api/categories/:categoryId", getCategoryById);

  // delete single category
  app.delete("/api/categories/:categoryId", deleteCategory);

  // update single category
  app.put("/api/categories/:categoryId", updateCategory);
};

module.exports.categoriesRoutes = categoriesRoutes;
