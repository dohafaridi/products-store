import axios from "axios";

import { getAxiosHeaders } from "../helpers";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_CLEAR_ERRORS = "USER_CLEAR_ERRORS";

export const USER_LOGOUT = "USER_LOGOUT";

export const addUser = (name, email, password) => dispatch => {
  dispatch({
    type: USER_REGISTER_REQUEST
  });

  axios
    .post("/api/users", { name, email, password })
    .then(res => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(({ response: { data: message } }) =>
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: {
          ...message,
          type: USER_REGISTER_FAILED
        }
      })
    );
};

export const login = (email, password) => dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST
  });

  axios
    .get("/api/auth", { params: { email, password } })
    .then(res => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(({ response: { data: message } }) =>
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: {
          ...message,
          type: USER_LOGIN_FAILED
        }
      })
    );
};

export const logout = () => ({
  type: USER_LOGOUT
});

export const clearErrors = () => ({
  type: USER_CLEAR_ERRORS
});
