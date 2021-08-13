
import React, { useReducer } from 'react'
import View from './view';
import ReducerContext from '../reducer_context';
import reducer, { initialState } from '../duck';

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <View />
    </ReducerContext.Provider>
  );
};