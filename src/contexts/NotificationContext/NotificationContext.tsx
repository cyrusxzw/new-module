import React, { createContext, useContext, FC } from 'react';
import { useNotificationStore } from './NotificationStore';

const NotificationContext = createContext(undefined);

const NotificationContextProvider: FC = ({ children }) => (
  <NotificationContext.Provider value={useNotificationStore()}>
    {children}
  </NotificationContext.Provider>
);

const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error(
      'useNotificationContext must be used within a NotificationContextProvider',
    );
  }

  return context;
};

export { NotificationContextProvider, useNotificationContext };
