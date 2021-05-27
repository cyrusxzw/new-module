type AddToCartActionType = 'fail' | 'fetching' | 'success';

type AddToCartAction = {
  type: AddToCartActionType;
  payload?: string;
};

type OnAddToCartClick = (
  sku: string,
  addToCartDispatch: React.Dispatch<AddToCartAction>,
) => any;

type AddToCartStoreState = {
  errorMessage: string;
  hasError: boolean;
  isLoading: boolean;
  isUpdateSuccessful: false;
};

type AddToCartContextProps = {
  /**
    A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
    for an example. ___Required___
   */
  onClick?: OnAddToCartClick;
};

export type {
  AddToCartContextProps,
  AddToCartAction,
  AddToCartStoreState,
  OnAddToCartClick,
};
