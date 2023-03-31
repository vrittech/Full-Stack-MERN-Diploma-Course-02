import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import cookie from "react-cookies";
import { setUserData } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import getUserDetailsFromToken from "../helpers/jwt";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:8080/api/login", {
        headers: {
          "Content-Type": " application/json",
        },
        method: "POST",
        body: JSON.stringify(state),
      });
      const res = await response.json();
      if (response.status === 200) {
        dispatch(setUserData(res));
        const userData = getUserDetailsFromToken(res?.accessToken);
        toast.success("Login successfully");
        cookie.save("accessToken", res.accessToken, { path: "/" });
        if (userData?.userType === "user") {
          return navigate("/");
        }
        navigate("/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <Container>
      <h1>Login form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
