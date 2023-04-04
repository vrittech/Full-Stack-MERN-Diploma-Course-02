import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearProductsFromCart } from "../features/cart/cartSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.cart);
  const { userData, tokens } = useSelector((state) => state.user);
  const [state, setState] = useState({
    payment: "",
    shippingAddress: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      const { payment, shippingAddress } = state;
      event.preventDefault();

      const products = carts?.map((cart) => cart._id);
      const sendData = {
        shippingAddress,
        payment,
        products,
        orderItems: carts,
        user: userData._id,
      };

      const response = await fetch("http://localhost:8080/api/orders", {
        headers: {
          "Content-Type": " application/json",
          authentication: `Bearer ${tokens?.accessToken}`,
        },
        method: "POST",

        body: JSON.stringify(sendData),
      });
      const res = await response.json();
      if (response.status === 200) {
        dispatch(clearProductsFromCart());
        toast.success("Order created successfully");
        navigate("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {}
  };

  const totalAmount = carts.reduce((acc, cart) => {
    return (acc += cart.price * cart.quantity);
  }, 0);

  console.log("HELLO", state);
  return (
    <Container
      style={{
        marginTop: 30,
      }}
    >
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart, index) => (
                <tr key={cart._id}>
                  <td>{index + 1}</td>
                  <td>
                    <Image
                      width={100}
                      thumbnail
                      src={`http://localhost:8080/${cart.imageURL}`}
                    />
                  </td>
                  <td>{cart.title}</td>
                  <td>{cart.price}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.price * cart.quantity}</td>
                </tr>
              ))}
              <tr>
                <th colSpan={5}></th>
                <th colSpan={2}>Total: {totalAmount}</th>
              </tr>
            </tbody>
          </Table>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Shipping address</Form.Label>
              <Form.Control
                name="shippingAddress"
                onChange={handleChange}
                type="text"
                placeholder="Enter shipping address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment method</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="payment"
                aria-label="Default select payment method"
              >
                <option>Open this select menu</option>
                <option value="cod">Cash On Delivery</option>
                <option value="bank">Bank</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
