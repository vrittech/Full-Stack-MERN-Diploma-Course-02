import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CardItem from "../components/CardItem";

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
      .get("http://localhost:8080/api/todos")
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
        return <CardItem key={todo.id} todo={todo} />;
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
