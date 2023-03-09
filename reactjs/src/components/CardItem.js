import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardItem = ({ todo }) => {
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
};

export default CardItem;
