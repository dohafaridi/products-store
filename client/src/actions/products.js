export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = name => ({
  type: ADD_PRODUCT,
  name
});

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
});
