import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../features/user/userSlice";
import cookie from "react-cookies";

const NavBar = () => {
  const dispatch = useDispatch();
  const { productCount } = useSelector((state) => state.cart);
  const { userData, isUserLoggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    cookie.remove("accessToken", { path: "/" });
    dispatch(userLogout());
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Vrit Shopping Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isUserLoggedIn ? (
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
              <NavDropdown.Item>{userData?.fullname}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
          )}
          &nbsp;&nbsp;
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
