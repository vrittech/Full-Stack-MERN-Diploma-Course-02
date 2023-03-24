const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

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

// CRUD
// create => POST
// read  => GET
// update => PUT
// delete => DELETE

// create single todo
app.post("/api/todos", (req, res) => {
  console.log("REQUEST", req.body, req.params, req.query);
  const todo = new Todo({
    title: req.body.title,
    status: req.body.status,
  });
  todo
    .save()
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((error) => res.send(error));
  // try {
  //   const todo = new Todo({
  //     title: req.body.title,
  //     status: req.body.status,
  //   });
  //   const response = await todo.save();
  //   hello = 2;
  //   res.send(response);
  // } catch (error) {
  //   res.send({
  //     message: "Error",
  //   });
  // }
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
  const deleteTodo = Todo.deleteOne({ _id: todoId });
  deleteTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

// update single todo
app.put("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  console.log(todoId, req.body);
  const updateTodo = Todo.findByIdAndUpdate(
    { _id: todoId },
    {
      status: req.body.status,
      title: req.body.title,
    },
    {
      new: true,
    }
  );
  updateTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

app.listen(8080, () => {
  console.log("Success !");
});

/*

username: arjunghimire0714
password: 5To8pNNAV5uDqgw2

*/
