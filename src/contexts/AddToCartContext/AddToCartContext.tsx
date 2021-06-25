import React, { createContext, useContext } from 'react';
import { useAddToCartStore } from './AddToCartStore';
import type { AddToCartContextProviderType } from './AddToCartContext.types';

const AddToCartContext = createContext(undefined);

const AddToCartContextProvider: AddToCartContextProviderType = ({
  children,
  onClick,
}) => (
  <AddToCartContext.Provider value={useAddToCartStore(onClick)}>
    {children}
  </AddToCartContext.Provider>
);

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
