import { MouseEventHandler } from 'react';

type LoadMoreContextProps = {
  /**
    A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [LoadMoreButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.js)
    for an example. ___Required___
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type { LoadMoreContextProps };
