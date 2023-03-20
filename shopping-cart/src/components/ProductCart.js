import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, price, productName, productDescription, image } = props;
  const { carts } = useSelector((state) => state.cart);

  const handleNavigateCart = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    const findProduct = carts.find((cart) => cart.id === product.id);
    console.log(findProduct);
    if (findProduct) {
      alert("Item already present");
    } else {
      dispatch(addProductToCart(product));
    }
  };
  return (
    <Card
      onClick={() => handleNavigateCart(id)}
      style={{ marginBottom: "10px" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{productDescription}</Card.Text>
        <Card.Subtitle>Rs. {price}</Card.Subtitle>
        <Button
          onClick={(event) => handleAddToCart(event, props)}
          variant="primary"
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
