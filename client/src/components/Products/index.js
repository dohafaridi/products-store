import { connect } from "react-redux";

import Products from "./Products";
import { getProducts, addProduct, removeProduct } from "../../actions/products";

const mapStateToProps = ({ products, user }) => ({
  products: products.data,
  user
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  addProduct: name => dispatch(addProduct(name)),
  removeProduct: id => dispatch(removeProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
