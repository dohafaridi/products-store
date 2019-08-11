import { GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/products";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        isLoading: false,
        error: null,
        data: action.payload
      };
    case ADD_PRODUCT:
      return {
        isLoading: false,
        error: null,
        data: [action.payload, ...state.data]
      };
    case REMOVE_PRODUCT:
      return {
        isLoading: false,
        error: null,
        data: state.data.filter(product => product._id !== action.payload)
      };
    default:
      return state;
  }
};

export default products;
