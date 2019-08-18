import axios from "axios";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export const USER_CLEAR_ERRORS = "USER_CLEAR_ERRORS";

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

export const clearErrors = () => ({
  type: USER_CLEAR_ERRORS
});
