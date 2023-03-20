import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ProductPage = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductPage;
