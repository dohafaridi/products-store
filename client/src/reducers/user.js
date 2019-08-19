import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_CLEAR_ERRORS
} from "../actions/user";

const initialState = {
  isLoading: false,
  errors: null,
  data: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null
      };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        isLoading: false,
        errors: null,
        data: action.payload
      };
    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
      return {
        isLoading: false,
        errors: action.payload,
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
