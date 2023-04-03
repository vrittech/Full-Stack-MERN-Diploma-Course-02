import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import { fetchProducts } from "../features/product/productSlice";

const PER_PAGE_COUNT = 10;

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, products, error } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
