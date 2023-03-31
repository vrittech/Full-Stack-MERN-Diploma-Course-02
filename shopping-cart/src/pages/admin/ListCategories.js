import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function ListCategories() {
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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container className="mt-5">
      <Link to="/admin/categories/create">
        <Button className="mb-3" variant="primary">
          Create Category
        </Button>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => {
            return (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td>{category.slug}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
