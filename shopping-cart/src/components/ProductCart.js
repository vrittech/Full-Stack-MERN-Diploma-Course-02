import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import {
  addProductToCart,
  removeProductFromCart,
} from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
    dispatch(
      addProductToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success("Product added to cart");
  };

  const handleRemoveFromCart = (event, productId) => {
    event.stopPropagation();
    dispatch(removeProductFromCart(productId));
    toast.error("Product removed from cart");
  };
  const findProduct = carts.find((cart) => cart.id === id);
  return (
    <Card
      onClick={() => handleNavigateCart(id)}
      style={{ marginBottom: "10px", cursor: "pointer" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{productDescription}</Card.Text>
        <Card.Subtitle>Rs. {price}</Card.Subtitle>
        <br />
        {findProduct ? (
          <Button
            onClick={(event) => handleRemoveFromCart(event, id)}
            variant="danger"
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={(event) => handleAddToCart(event, props)}
            variant="primary"
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
