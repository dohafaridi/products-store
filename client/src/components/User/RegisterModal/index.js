import { connect } from "react-redux";

import RegisterModal from "./RegisterModal";
import { addUser } from "../../../actions/user";

const mapStateToProps = state => ({
  errors: state.user.errors
});

const mapDispatchToProps = dispatch => ({
  addUser: (name, email, password) => dispatch(addUser(name, email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
