import { connect } from "react-redux";

import LoginModal from "./LoginModal";
import { login } from "../../../actions/user";

const mapStateToProps = state => ({
  errors: state.user.errors
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
