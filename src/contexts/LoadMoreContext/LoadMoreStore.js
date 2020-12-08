import { useReducer } from 'react';

const LOAD_MORE_ACTION_TYPES = {
  FAIL: 'FAIL',
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
};

const initialState = {
  hasError: false,
  isLoading: false,
};

const reducer = (state, action) => {
  if (action.type === LOAD_MORE_ACTION_TYPES.FETCHING) {
    return {
      hasError: false,
      isLoading: true,
    };
  } else if (action.type === LOAD_MORE_ACTION_TYPES.SUCCESS) {
    return {
      hasError: false,
      isLoading: false,
    };
  } else if (action.type === LOAD_MORE_ACTION_TYPES.FAIL) {
    return {
      hasError: true,
      isLoading: false,
    };
  }

  throw new Error(
    `useLoadMore: Dispatch action type "${action.type}" not found.`,
  );
};

const useLoadMoreStore = onClick => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, hasError } = state;

  return {
    actionTypes: LOAD_MORE_ACTION_TYPES,
    dispatch,
    hasError,
    isLoading,
    onClick,
  };
};

export { useLoadMoreStore, LOAD_MORE_ACTION_TYPES };
