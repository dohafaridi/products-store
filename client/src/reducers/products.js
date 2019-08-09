import uuid from "uuid";

import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/products";

const initialState = [
  { id: uuid(), name: "Eggs" },
  { id: uuid(), name: "Milk" },
  { id: uuid(), name: "Steak" },
  { id: uuid(), name: "Water" }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, { id: uuid(), name: action.name }];
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
};

export default products;
