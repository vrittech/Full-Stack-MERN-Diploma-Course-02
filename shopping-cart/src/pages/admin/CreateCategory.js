import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateCategory() {
  const navigate = useNavigate();
  const { tokens } = useSelector((state) => state.user);
  const [category, setCategory] = useState("");

  const handleOnChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { accessToken } = tokens;
    try {
      const response = await fetch("http://localhost:8080/api/categories", {
        headers: {
          "Content-Type": " application/json",
          authentication: `Bearer ${accessToken}`,
        },
        method: "POST",

        body: JSON.stringify({
          title: category,
        }),
      });
      const res = await response.json();
      if (response.status === 200) {
        toast.success("Category added successfully");
        navigate("/admin/categories");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Failed to create category");
    }
  };

  return (
    <Container className="mt-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            value={category}
            placeholder="Enter category title"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
