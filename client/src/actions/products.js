import axios from "axios";

import { getAxiosHeaders } from "../helpers";

export const SET_PRODUCTS_LOADING = "SET_PRODUCTS_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setProductsLoading = () => ({
  type: SET_PRODUCTS_LOADING
});

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());

  axios.get("/api/products").then(res =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  );
};

export const addProduct = name => (dispatch, getState) =>
  axios
    .post("/api/products", { name }, { headers: getAxiosHeaders(getState()) })
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    );

export const removeProduct = id => (dispatch, getState) =>
  axios
    .delete(`/api/products/${id}`, { headers: getAxiosHeaders(getState()) })
    .then(res =>
      dispatch({
        type: REMOVE_PRODUCT,
        payload: id
      })
    );
