import reducer, { initialState, setProducts, SET_PRODUCTS }  from 'src/duck';

const products = [{ name: 'product1' }, { name: 'product2' }];

describe('setProducts', () => {
  it('returns SET_PRODUCTS action type with the given products', () => {
    expect(setProducts(products)).toEqual({
      type: SET_PRODUCTS,
      products,
    });
  });
});

describe('reducer', () => {
  describe('SET_PRODUCTS', () => {
    it('adds the given products to the state', () => {
      const newState = reducer(initialState, setProducts(products));

      expect(newState.products).toEqual(products);
    })
  })
});