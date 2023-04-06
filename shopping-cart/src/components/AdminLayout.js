import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AdminLayout() {
  const { userData, isUserLoggedIn } = useSelector((state) => state.user);
  const location = useLocation();
  console.log("location Admin Layout");
  if (!isUserLoggedIn) {
    return (
      <Navigate
        state={{
          path: location.pathname,
        }}
        to={`/login?returnUrl=${location.pathname}`}
      />
    );
  }

  if (userData?.userType !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <AdminNavBar />
      <Row className="mt-5">
        <Col lg={2}>
          <ListGroup defaultActiveKey="#link1">
            <Link to="/admin/categories">
              <ListGroup.Item action>Categories</ListGroup.Item>
            </Link>

            <Link to="/admin/products">
              <ListGroup.Item action>Products</ListGroup.Item>
            </Link>
            <Link to="/admin/orders">
              <ListGroup.Item action>Orders</ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col lg={10}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
