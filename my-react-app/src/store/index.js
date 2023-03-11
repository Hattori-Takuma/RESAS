import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/index';
const initialState = {
  result_data: [],
  show_pref_data: [],
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;