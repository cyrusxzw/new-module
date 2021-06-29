import { useReducer } from 'react';
import type { MouseEventHandler } from 'react';

enum LOAD_MORE_ACTION_TYPES {
  FAIL,
  FETCHING,
  SUCCESS,
}

type State = {
  hasError: boolean;
  isLoading: boolean;
};

type Action = {
  type: LOAD_MORE_ACTION_TYPES;
};

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

    default: {
      throw new Error(
        `useLoadMore: Dispatch action type "${action.type}" not found.`,
      );
    }
  }
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
