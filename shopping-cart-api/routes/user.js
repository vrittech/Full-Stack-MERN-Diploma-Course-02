const { createUser, login } = require("../controllers/user.controller");

const userRoutes = (app) => {
  app.post("/api/signup", createUser);

  app.post("/api/login", login);
};

module.exports = {
  userRoutes,
};
