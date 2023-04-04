import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

export default function ListOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/orders");
      const res = await response.json();
      if (response.status === 200) {
        setOrders(res.payload.data);
      }
    } catch (error) {
      setOrders([]);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Shipping Address</th>
            <th>Createdt At</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => {
            return (
              <>
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.user.fullname}</td>
                  <td>{order.user.phoneNumber}</td>
                  <td>{order.orderStatus}</td>
                  <td>{order.payment}</td>
                  <td>{order.shippingAddress}</td>
                  <td>{order.createdAt}</td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <Accordion defaultActiveKey={order._id}>
                      <Accordion.Item eventKey={order._id}>
                        <Accordion.Header>Order Details</Accordion.Header>
                        <Accordion.Body>
                          <Table bordered hover>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Image</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.orderItems?.map((product, index) => {
                                return (
                                  <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>
                                      <img
                                        src={`http://localhost:8080/${product.imageURL}`}
                                        width={100}
                                        height={100}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
