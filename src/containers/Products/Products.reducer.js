import {
  PRODUCTS,
  PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
  MODIFYBASKET,
  MODIFYBASKET_SUCCESS
} from './Products.actions';

const initialState = {
  data: [],
  cantidad: 0,
  basket: [],
  fetching: false,
  fetched: false,
  error: null
};

/**
 * Product's reducer
 */
const productsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PRODUCTS: {
      return { ...state, fetching: true };
    }
    case PRODUCTS_SUCCESS: {
      return { ...state, data: payload, fetching: false, fetched: true };
    }
    case PRODUCTS_ERROR: {
      return { ...state, error: payload.error };
    }
    case MODIFYBASKET: {
      return { ...state, fetching: true };
    }
    case MODIFYBASKET_SUCCESS: {
      return { ...state, cantidad: payload, fetching: false, fetched: true };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
