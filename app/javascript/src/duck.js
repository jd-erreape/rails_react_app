export const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export default (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default:
      return state;
  }
};

export const initialState = {
  products: []
};