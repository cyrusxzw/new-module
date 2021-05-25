import { MouseEventHandler, FC } from 'react';

declare type AddToCartContextProps = {
    /**
      A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
      for an example. ___Required___
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

declare const AddToCartContextProvider: FC<AddToCartContextProps>;
declare const useAddToCartContext: () => any;

export { AddToCartContextProvider, useAddToCartContext };
