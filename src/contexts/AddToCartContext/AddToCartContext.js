import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useAddToCartStore } from './AddToCartStore';

const AddToCartContext = createContext();

const AddToCartContextProvider = ({ children, onClick }) => (
  <AddToCartContext.Provider value={useAddToCartStore(onClick)}>
    {children}
  </AddToCartContext.Provider>
);

AddToCartContextProvider.propTypes = {
  children: PropTypes.any,
  /**
    A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
    for an example. ___Required___
   */
  onClick: PropTypes.func,
};

const useAddToCartContext = () => {
  const context = useContext(AddToCartContext);

  if (context === undefined) {
    throw new Error(
      'useAddToCartContext must be used within a AddToCartContextProvider',
    );
  }

  return context;
};

export { AddToCartContextProvider, useAddToCartContext };
