import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState({});

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/todos/${editTodo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo,
        status: "completed",
      }),
    })
      .then((response) => response.json())
      .then(() => {
        getTodos();
        setTodo("");
      });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo,
        status: "pending",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        getTodos();
        setTodo("");
      });
  };

  const getTodos = () => {
    fetch("http://localhost:8080/api/todos")
      .then((response) => response.json())
      .then((response) => setTodos(response));
  };

  const handleDeleteTodo = (todoId) => {
    fetch(`http://localhost:8080/api/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        getTodos();
      });
  };

  const handleEditTodo = (todoId) => {
    fetch(`http://localhost:8080/api/todos/${todoId}`)
      .then((response) => response.json())
      .then((response) => {
        setEditTodo(response);
        setTodo(response.title);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container
      style={{
        marginTop: 30,
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          value={todo}
          onChange={handleChange}
          placeholder="Enter something..."
          aria-describedby="basic-addon2"
        />
        {Object.keys(editTodo).length === 0 ? (
          <Button onClick={handleSubmit} variant="primary" id="button-addon2">
            Add
          </Button>
        ) : (
          <Button onClick={handleUpdate} variant="primary" id="button-addon2">
            Update
          </Button>
        )}
      </InputGroup>

      <ListGroup as="ol" numbered>
        {todos.map((todo) => {
          return (
            <ListGroup.Item
              key={todo._id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <Link to={`/todo/${todo._id}`}>
                  <div className="fw-bold">{todo.title}</div>
                </Link>
                {todo.status}
              </div>
              <Button
                onClick={() => handleEditTodo(todo._id)}
                variant="success"
              >
                &#128394;.
              </Button>
              &nbsp;
              <Button
                onClick={() => handleDeleteTodo(todo._id)}
                variant="danger"
              >
                X
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
