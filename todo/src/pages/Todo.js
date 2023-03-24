import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";

export default function Todo() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState({});
  const getTodo = () => {
    fetch(`http://localhost:8080/api/todos/${todoId}`)
      .then((response) => response.json())
      .then((response) => setTodo(response));
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Container
      style={{
        marginTop: 30,
      }}
    >
      <Link to="/">
        <Button>Back to Todo List</Button>
      </Link>
      <br />
      <br />
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.title}</div>
            {todo.status}
          </div>
          <Badge variant="danger">X</Badge>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
