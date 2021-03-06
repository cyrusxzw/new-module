import { Dispatch } from 'react';
import { a as ComponentWithChildren } from './Component.types';

declare type AddToCartActionType = 'fail' | 'fetching' | 'success';
declare type AddToCartAction = {
    type: AddToCartActionType;
    payload?: string;
};
declare type OnAddToCartClick = (sku: string, addToCartDispatch: Dispatch<AddToCartAction>) => any;
declare type AddToCartContextProps = {
    /**
      A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
      for an example. ___Required___
     */
    onClick?: OnAddToCartClick;
};
declare type AddToCartContextProviderType = ComponentWithChildren<AddToCartContextProps>;

export { AddToCartContextProviderType as A, OnAddToCartClick as O };
