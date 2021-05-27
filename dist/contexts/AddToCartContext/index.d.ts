/// <reference types="react" />
import { FC } from 'react';

declare type AddToCartActionType = 'fail' | 'fetching' | 'success';
declare type AddToCartAction = {
    type: AddToCartActionType;
    payload?: string;
};
declare type OnAddToCartClick = (sku: string, addToCartDispatch: React.Dispatch<AddToCartAction>) => any;
declare type AddToCartContextProps = {
    /**
      A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
      for an example. ___Required___
     */
    onClick?: OnAddToCartClick;
};

declare const AddToCartContextProvider: FC<AddToCartContextProps>;
declare const useAddToCartContext: () => any;

export { AddToCartContextProvider, useAddToCartContext };
