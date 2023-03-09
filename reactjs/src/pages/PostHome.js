import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const perPageItem = 10;

const PostHome = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const handleShowMore = (type) => {
    if (type === "prev") {
      setPage((prevState) => prevState - 1);
    } else {
      setPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((success) => {
        setTodos(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {todos.slice((page - 1) * perPageItem, perPageItem * page).map((todo) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{todo.id}</Card.Title>
              <Card.Text>{todo.title}</Card.Text>
              <Link to={`/posts/${todo.id}`}>
                <Button variant="primary">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}

      <div
        style={{
          marginTop: 20,
        }}
      >
        <Button disabled={page === 1} onClick={() => handleShowMore("prev")}>
          Prev
        </Button>
        <Button disabled={page === 20} onClick={() => handleShowMore("next")}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default PostHome;
