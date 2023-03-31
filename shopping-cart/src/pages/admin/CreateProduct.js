import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateProduct() {
  const navigate = useNavigate();

  const { tokens } = useSelector((state) => state.user);

  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    imageURL: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/categories");
      const res = await response.json();
      if (response.status === 200) {
        setCategories(res);
      }
    } catch (error) {
      setCategories([]);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = async (event) => {
    let formData = new FormData();
    formData.append("image", event.target.files[0]);
    try {
      const response = await fetch("http://localhost:8080/api/images", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      if (response.status === 200) {
        console.log("RES", res.filename);
        setState((prevState) => ({
          ...prevState,
          imageURL: res.filename,
        }));
        toast.success("Image added successfully");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Failed to add image");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { accessToken } = tokens;
    try {
      const response = await fetch("http://localhost:8080/api/products", {
        headers: {
          "Content-Type": " application/json",
          authentication: `Bearer ${accessToken}`,
        },
        method: "POST",

        body: JSON.stringify(state),
      });
      const res = await response.json();
      if (response.status === 200) {
        toast.success("Product added successfully");
        navigate("/admin/products");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Failed to create product");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(state);
  const { title, description, price, imageURL, category } = state;
  return (
    <Container className="mt-5">
      {" "}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            value={title}
            onChange={handleOnChange}
            name="title"
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={description}
            onChange={handleOnChange}
            name="description"
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            onChange={handleImageUpload}
            name="imageURL"
            type="file"
            placeholder="Enter image url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={handleOnChange}
            name="price"
            type="text"
            placeholder="Enter price"
          />
        </Form.Group>
        <Form.Select
          onChange={handleOnChange}
          name="category"
          value={category}
          className="mb-5"
          aria-label="Default select example"
        >
          <option>Open this select category</option>
          {categories.map((category) => {
            return (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            );
          })}
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
