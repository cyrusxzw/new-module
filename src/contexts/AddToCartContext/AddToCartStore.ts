import { useReducer } from 'react';
import type {
  AddToCartAction,
  AddToCartStoreState,
  OnAddToCartClick,
} from './AddToCartContext.types';

const defaultState: AddToCartStoreState = {
  errorMessage: '',
  hasError: false,
  isLoading: false,
  isUpdateSuccessful: false,
};

const reducer = (_state: AddToCartStoreState, action: AddToCartAction) => {
  if (action.type === 'fetching') {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: true,
      isUpdateSuccessful: false,
    };
  } else if (action.type === 'success') {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: false,
      isUpdateSuccessful: true,
    };
  } else if (action.type === 'fail') {
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

const useAddToCartStore = (onClick: OnAddToCartClick) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { errorMessage, hasError, isLoading, isUpdateSuccessful } = state;

  return {
    dispatch,
    errorMessage,
    hasError,
    isLoading,
    isUpdateSuccessful,
    onClick,
  };
};

export { useAddToCartStore };
