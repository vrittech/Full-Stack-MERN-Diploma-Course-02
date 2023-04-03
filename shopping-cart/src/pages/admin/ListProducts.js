import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../features/product/productSlice";

export default function ListProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
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
