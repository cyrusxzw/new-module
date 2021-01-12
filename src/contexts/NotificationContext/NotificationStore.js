import { useReducer } from 'react';

const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const initialState = {
  showModal: false,
};

const reducer = (state, action) => {
  if (action.type === SHOW_NOTIFICATION) {
    return {
      showModal: !state.showModal,
    };
  }

  throw new Error(
    `useNotification: Dispatch action type "${action.type}" not found.`,
  );
};

const useNotificationStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showModal } = state;

  return {
    actionType: SHOW_NOTIFICATION,
    dispatch,
    showModal,
  };
};

export { useNotificationStore, SHOW_NOTIFICATION };
