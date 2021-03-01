import { useReducer, MouseEventHandler } from 'react';

const LOAD_MORE_ACTION_TYPES = {
  FAIL: 'FAIL',
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
};

interface State {
  hasError: boolean;
  isLoading: boolean;
}

interface Action {
  type:
    | typeof LOAD_MORE_ACTION_TYPES.SUCCESS
    | typeof LOAD_MORE_ACTION_TYPES.FAIL
    | typeof LOAD_MORE_ACTION_TYPES.FETCHING;
}

const initialState = {
  hasError: false,
  isLoading: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case LOAD_MORE_ACTION_TYPES.FETCHING: {
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    }

    case LOAD_MORE_ACTION_TYPES.SUCCESS: {
      return {
        ...state,
        hasError: false,
        isLoading: false,
      };
    }

    case LOAD_MORE_ACTION_TYPES.FAIL: {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    }
  }

  throw new Error(
    `useLoadMore: Dispatch action type "${action.type}" not found.`,
  );
};

const useLoadMoreStore = (onClick: MouseEventHandler<HTMLButtonElement>) => {
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
