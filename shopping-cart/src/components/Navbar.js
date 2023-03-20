import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { productCount } = useSelector((state) => state.cart);
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Vrit Shopping Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/cart">
            <Button variant="primary">
              Cart <Badge bg="secondary">{productCount}</Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
