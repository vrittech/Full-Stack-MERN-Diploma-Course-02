const {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");

const todoRoutes = (app) => {
  // get all todos
  app.get("/api/todos", getTodos);

  // create single todo
  app.post("/api/todos", createTodo);

  // get single todo
  app.get("/api/todos/:todoId", getTodo);

  // delete single todo
  app.delete("/api/todos/:todoId", deleteTodo);

  // update single todo
  app.put("/api/todos/:todoId", updateTodo);
};

module.exports.todoRoutes = todoRoutes;
