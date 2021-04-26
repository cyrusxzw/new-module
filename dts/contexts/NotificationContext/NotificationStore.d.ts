/// <reference types="react" />
declare enum NOTIFICATION_ACTION_TYPES {
  SHOW_NOTIFICATION = 0,
}
declare type Action = {
  type: NOTIFICATION_ACTION_TYPES;
};
declare const useNotificationStore: () => {
  actionType: typeof NOTIFICATION_ACTION_TYPES;
  dispatch: import('react').Dispatch<Action>;
  showModal: boolean;
};
export { useNotificationStore, NOTIFICATION_ACTION_TYPES };
