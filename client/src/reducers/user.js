import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_CLEAR_ERRORS
} from "../actions/user";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
  data: {
    token: localStorage.getItem("token")
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload
      };
    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
      return {
        ...state,
        errors: action.payload
      };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        isAuthenticated: false,
        isLoading: false,
        errors: null,
        data: null
      };
    case USER_CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
};
export default user;
