import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { productCount } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.user);
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Vrit Shopping Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={
              <Button variant="light">
                <img
                  width={30}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs5-3rRrgwI9UN4AHuShbLIOcnxXT_jZskcpvUf_FTQ&s"
                />
              </Button>
            }
          >
            <NavDropdown.Item href="#action/3.1">
              {userData?.fullname}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
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
