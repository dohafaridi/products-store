import { connect } from "react-redux";

import Products from "./Products";
import { addProduct, removeProduct } from "../../actions/products";

const mapStateToProps = ({ products }) => ({
  products
});

const mapDispatchToProps = dispatch => ({
  addProduct: name => dispatch(addProduct(name)),
  removeProduct: id => dispatch(removeProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
