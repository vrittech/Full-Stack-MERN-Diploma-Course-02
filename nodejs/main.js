const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());
// CRUD
// create => POST
// read  => GET
// update => PUT
// delete => DELETE

const TODOS = [
  {
    id: 1,
    status: "completed",
    title: "Todo 1",
  },
  {
    id: 2,
    status: "pending",
    title: "Todo 2",
  },
  {
    id: 3,
    status: "completed",
    title: "Todo 3",
  },
  {
    id: 4,
    status: "completed",
    title: "Todo 4",
  },
  {
    id: 5,
    status: "completed",
    title: "Todo 5",
  },
];

// get all todos
app.get("/api/todos", (req, res) => {
  res.send(TODOS);
});

// get single todo
app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  // console.log(req.body, req.query, req.params);
  const findTodo = TODOS.find((todo) => todo.id === +todoId);
  res.send(findTodo);
});

// delete single todo
app.delete("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  // console.log(req.body, req.query, req.params);
  const filterTodos = TODOS.filter((todo) => todo.id !== +todoId);
  res.send(filterTodos);
});

// update single todo
app.put("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  // console.log(TODOS);
  const findTodoIndex = TODOS.findIndex((todo) => todo.id === +todoId);
  TODOS[findTodoIndex] = req.body;
  // console.log(req.body, req.query, req.params, findTodoIndex, TODOS);
  res.send(TODOS);
});

app.listen(8080, () => {
  console.log("Success !");
});
