const {
  getCategories,
  createCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");
const { adminMiddleware } = require("../middleware");

const categoriesRoutes = (app) => {
  // get all ctegories
  app.get("/api/categories", getCategories);

  // create single category
  app.post("/api/categories", adminMiddleware, createCategory);

  // get single category
  app.get("/api/categories/:categoryId", getCategoryById);

  // delete single category
  app.delete("/api/categories/:categoryId", adminMiddleware, deleteCategory);

  // update single category
  app.put("/api/categories/:categoryId", adminMiddleware, updateCategory);
};

module.exports.categoriesRoutes = categoriesRoutes;
