import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function ListProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products");
      const res = await response.json();
      console.log(res);
      if (response.status === 200) {
        setProducts(res.payload.data);
      }
    } catch (error) {
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="mt-5">
      <Link to="/admin/products/create">
        <Button className="mb-3" variant="primary">
          Create Product
        </Button>
      </Link>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.category.title}</td>
                <td>{product.description}</td>
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
    </Container>
  );
}
