import type { MouseEventHandler } from 'react';
import type { ComponentWithChildren } from '~/types';

type LoadMoreContextProps = {
  /**
    A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [LoadMoreButton.onClick.ts mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.ts)
    for an example. ___Required___
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type LoadMoreContextProviderType = ComponentWithChildren<LoadMoreContextProps>;

export type { LoadMoreContextProps, LoadMoreContextProviderType };
