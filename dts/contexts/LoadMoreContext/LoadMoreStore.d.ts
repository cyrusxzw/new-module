import { MouseEventHandler } from 'react';
declare enum LOAD_MORE_ACTION_TYPES {
  FAIL = 0,
  FETCHING = 1,
  SUCCESS = 2,
}
declare type Action = {
  type: LOAD_MORE_ACTION_TYPES;
};
declare const useLoadMoreStore: (
  onClick: MouseEventHandler<HTMLButtonElement>,
) => {
  actionTypes: typeof LOAD_MORE_ACTION_TYPES;
  dispatch: import('react').Dispatch<Action>;
  hasError: boolean;
  isLoading: boolean;
  onClick: (
    event: import('react').MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};
export { useLoadMoreStore, LOAD_MORE_ACTION_TYPES };
