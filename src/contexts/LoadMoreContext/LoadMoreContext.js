import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLoadMoreStore } from './LoadMoreStore';

const LoadMoreContext = createContext();

const LoadMoreContextProvider = ({ children, onClick }) => (
  <LoadMoreContext.Provider value={useLoadMoreStore(onClick)}>
    {children}
  </LoadMoreContext.Provider>
);

LoadMoreContextProvider.propTypes = {
  children: PropTypes.any,
  /**
    A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [LoadMoreButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.js)
    for an example. ___Required___
   */
  onClick: PropTypes.func,
};

const useLoadMoreContext = () => {
  const context = useContext(LoadMoreContext);

  if (context === undefined) {
    throw new Error(
      'useLoadMoreContext must be used within a LoadMoreContextProvider',
    );
  }

  return context;
};

export { LoadMoreContextProvider, useLoadMoreContext };
