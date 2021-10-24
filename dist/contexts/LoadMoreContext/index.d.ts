import { MouseEventHandler } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';

declare type LoadMoreContextProps = {
    /**
      A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
      as arguments. See [LoadMoreButton.onClick.ts mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.ts)
      for an example. ___Required___
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
};
declare type LoadMoreContextProviderType = ComponentWithChildren<LoadMoreContextProps>;

declare const LoadMoreContextProvider: LoadMoreContextProviderType;
declare const useLoadMoreContext: () => any;

export { LoadMoreContextProvider, useLoadMoreContext };
