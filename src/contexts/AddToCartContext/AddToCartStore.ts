import { useReducer } from 'react';

enum ADD_TO_CART_ACTION_TYPES {
  FAIL,
  FETCHING,
  SUCCESS,
}

const defaultState = {
  actionTypes: {},
  dispatch: () => {
    return;
  },
  errorMessage: '',
  hasError: false,
  isLoading: false,
  isUpdateSuccessful: false,
  onClick: () => {
    return;
  },
};

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART_ACTION_TYPES.FETCHING) {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: true,
      isUpdateSuccessful: false,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.SUCCESS) {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: false,
      isUpdateSuccessful: true,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.FAIL) {
    return {
      errorMessage: action.payload,
      hasError: true,
      isLoading: false,
      isUpdateSuccessful: false,
    };
  }

  throw new Error(
    `useAddToCartStore: Dispatch action type "${action.type}" not found.`,
  );
};

const useAddToCartStore = (onClick) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { errorMessage, hasError, isLoading, isUpdateSuccessful } = state;

  return {
    actionTypes: ADD_TO_CART_ACTION_TYPES,
    dispatch,
    errorMessage,
    hasError,
    isLoading,
    isUpdateSuccessful,
    onClick,
  };
};

export { useAddToCartStore, ADD_TO_CART_ACTION_TYPES };
