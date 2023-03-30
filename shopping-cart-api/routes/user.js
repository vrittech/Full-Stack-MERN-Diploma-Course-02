const {
  createUser,
  login,
  getUsers,
  getUser,
} = require("../controllers/user.controller");

const userRoutes = (app) => {
  app.post("/api/signup", createUser);

  app.post("/api/login", login);

  app.get("/api/users", getUsers);

  app.get("/api/users/:userId", getUser);
};

module.exports = {
  userRoutes,
};
