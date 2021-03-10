import React, { createContext, useContext, FC } from 'react';
import { useAddToCartStore } from './AddToCartStore';
import type { Props } from './AddToCartContext.types';

const AddToCartContext = createContext(undefined);

const AddToCartContextProvider: FC<Props> = ({ children, onClick }) => (
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
