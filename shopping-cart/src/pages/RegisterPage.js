import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [state, setState] = useState({
    fullname: "",
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
      const response = await fetch("http://localhost:8080/api/signup", {
        headers: {
          "Content-Type": " application/json",
        },
        method: "POST",
        body: JSON.stringify(state),
      });
      const res = await response.json();
      console.log(response.status);
      if (response.status === 200) {
        toast.success("Signup successfully");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Signup failed");
    }
  };

  return (
    <Container>
      <h1>Register form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            name="fullname"
            placeholder="Enter fullname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
          />
        </Form.Group>
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
