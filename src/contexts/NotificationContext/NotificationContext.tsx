import React, { createContext, useContext } from 'react';
import { useNotificationStore } from './NotificationStore';
import type { ComponentWithChildren } from '~/types';

const NotificationContext = createContext(undefined);

const NotificationContextProvider: ComponentWithChildren = ({ children }) => (
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
