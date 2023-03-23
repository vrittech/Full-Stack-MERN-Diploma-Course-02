const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// database connection
main()
  .then(() => console.log("🙌. 🥳. 🎉. 🤩. 🤗"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://arjunghimire0714:5To8pNNAV5uDqgw2@cluster0.fm2salw.mongodb.net/?retryWrites=true&w=majority"
  );
}

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

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

// create single todo
app.post("/api/todos", (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    status: req.body.status,
  });
  todo
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
});

// get all todos
app.get("/api/todos", (req, res) => {
  const todos = Todo.find();
  todos
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

// get single todo
app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const findTodo = Todo.findOne({ _id: todoId });
  findTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
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

/*

username: arjunghimire0714
password: 5To8pNNAV5uDqgw2

*/
