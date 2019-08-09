import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Products = ({ products, addProduct, removeProduct }) => (
  <Container>
    <Button
      color="dark"
      style={{ marginBottom: "2rem" }}
      onClick={() => {
        const name = prompt("Enter product");
        if (name) {
          addProduct(name);
        }
      }}
    >
      Add Product
    </Button>

    <ListGroup>
      <TransitionGroup className="shopping-list">
        {products.map(({ id, name }) => (
          <CSSTransition key={id} timeout={500} classNames="fade">
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => removeProduct(id)}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  </Container>
);

export default Products;
