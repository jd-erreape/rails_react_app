import React, { useContext, useEffect } from 'react';
import View from './view';
import ReducerContext from '../reducer_context';
import { setProducts } from '../duck';

export default () => {
  const { state, dispatch } = useContext(ReducerContext);

  useEffect(() => {
    fetch('/api/v1/products')
      .then(response => response.json().then(data => dispatch(setProducts(data))));
  }, []);

  return (
    <View products={state.products} />
  );
};