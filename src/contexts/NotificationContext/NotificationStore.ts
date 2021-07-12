import type { Dispatch } from 'react';
import { useReducer } from 'react';

enum NOTIFICATION_ACTION_TYPES {
  SHOW_NOTIFICATION,
}

const initialState = {
  showModal: false,
};

type State = {
  showModal: boolean;
};

type Action = {
  type: NOTIFICATION_ACTION_TYPES;
};

const reducer = (state: State, action: Action) => {
  if (action.type === NOTIFICATION_ACTION_TYPES.SHOW_NOTIFICATION) {
    return {
      showModal: !state.showModal,
    };
  }

  throw new Error(
    `useNotification: Dispatch action type "${action.type}" not found.`,
  );
};

type UseNotificationStore = () => {
  actionType: any;
  dispatch: Dispatch<Action>;
  showModal: boolean;
};

const useNotificationStore: UseNotificationStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showModal } = state;

  return {
    actionType: NOTIFICATION_ACTION_TYPES,
    dispatch,
    showModal,
  };
};

export { useNotificationStore, NOTIFICATION_ACTION_TYPES };
