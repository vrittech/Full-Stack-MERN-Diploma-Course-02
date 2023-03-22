import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const PER_PAGE_COUNT = 10;

const HomePage = () => {
  const products = useSelector((state) => state.cart.products);
  const [page, setPage] = useState(1);
  return (
    <div>
      <Container
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Row>
          {products
            .slice((page - 1) * PER_PAGE_COUNT, PER_PAGE_COUNT * page)
            .map((product) => {
              return (
                <Col key={product.id} sm={3}>
                  <ProductCart {...product} />
                </Col>
              );
            })}
        </Row>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={page === 5} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
