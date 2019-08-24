import { connect } from "react-redux";

import HeaderNav from "./HeaderNav";
import { logout } from "../../actions/user";

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
