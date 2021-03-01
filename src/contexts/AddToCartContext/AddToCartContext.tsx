import React, {
  createContext,
  useContext,
  FunctionComponent,
  MouseEventHandler,
} from 'react';
import { useAddToCartStore } from './AddToCartStore';

interface AddToCartContextProviderProps {
  /**
    A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
    for an example. ___Required___
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const AddToCartContext = createContext(undefined);

const AddToCartContextProvider: FunctionComponent<AddToCartContextProviderProps> = ({
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
