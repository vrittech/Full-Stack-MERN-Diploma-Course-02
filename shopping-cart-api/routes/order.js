const {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order.controller");
const { authMiddleware } = require("../middleware");

const ordersRoutes = (app) => {
  // get all orders
  app.get("/api/orders", getOrders);

  // create single order
  app.post("/api/orders", authMiddleware, createOrder);

  app.put("/api/orders", updateOrder);

  // delete single order
  app.delete("/api/orders/:orderId", deleteOrder);
};

module.exports.ordersRoutes = ordersRoutes;
