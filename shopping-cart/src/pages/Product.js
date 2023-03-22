import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NumericInput from "react-numeric-input";
import { toast } from "react-toastify";
import { addProductToCart } from "../features/cart/cartSlice";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { products, carts } = useSelector((state) => state.cart);
  const product = products.find((product) => product.id === productId);

  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const findProduct = carts.find((cart) => cart.id === productId);
    if (findProduct) {
      toast.error("Product already in cart");
    } else {
      dispatch(
        addProductToCart({
          ...product,
          quantity,
        })
      );
      toast.success("Product added to cart");
    }
  };

  return (
    <div>
      <Container
        style={{
          marginTop: 20,
        }}
      >
        <Card>
          <Card.Header>{product.productName}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{product.productDescription}</p>
              <footer className="blockquote-footer">Rs.{product.price}</footer>
            </blockquote>
            <br /> <br />
            <Row>
              <Col lg={2}>
                <NumericInput
                  onChange={handleChangeQuantity}
                  className="form-control"
                  min={1}
                  max={10}
                  value={quantity}
                />
              </Col>
              <Col>
                <Button onClick={handleAddToCart} variant="primary">
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductPage;
