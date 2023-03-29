const {
  createUser,
  login,
  getUsers,
} = require("../controllers/user.controller");

const userRoutes = (app) => {
  app.post("/api/signup", createUser);

  app.post("/api/login", login);

  app.get("/api/users", getUsers);
};

module.exports = {
  userRoutes,
};
