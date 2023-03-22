import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { removeProductFromCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { carts, productCount } = useSelector((state) => state.cart);

  const handleDeleteProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const totalAmount = carts.reduce((acc, cart) => {
    return (acc += cart.price * cart.quantity);
  }, 0);
  return (
    <div>
      <Container
        style={{
          marginTop: 30,
        }}
      >
        <h2>Products ({productCount})</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <tr key={cart.id}>
                <td>{index + 1}</td>
                <td>
                  <Image width={100} thumbnail src={cart.image} />
                </td>
                <td>{cart.productName}</td>
                <td>{cart.price}</td>
                <td>{cart.quantity}</td>
                <td>{cart.price * cart.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(cart.id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan={5}></th>
              <th colSpan={2}>Total: {totalAmount}</th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CartPage;
