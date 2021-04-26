/// <reference types="react" />
declare enum ADD_TO_CART_ACTION_TYPES {
  FAIL = 0,
  FETCHING = 1,
  SUCCESS = 2,
}
declare const useAddToCartStore: (
  onClick: any,
) => {
  actionTypes: typeof ADD_TO_CART_ACTION_TYPES;
  dispatch: import('react').Dispatch<any>;
  errorMessage: any;
  hasError: boolean;
  isLoading: boolean;
  isUpdateSuccessful: boolean;
  onClick: any;
};
export { useAddToCartStore, ADD_TO_CART_ACTION_TYPES };
