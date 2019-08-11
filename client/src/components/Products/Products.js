import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Products = ({ products, getProducts, addProduct, removeProduct }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products ? (
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
          {products.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => removeProduct(_id)}
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
  ) : null;
};
export default Products;
