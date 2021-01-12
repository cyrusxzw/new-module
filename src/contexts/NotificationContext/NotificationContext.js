import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNotificationStore } from './NotificationStore';

const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => (
  <NotificationContext.Provider value={useNotificationStore()}>
    {children}
  </NotificationContext.Provider>
);

NotificationContextProvider.propTypes = {
  children: PropTypes.any,
};

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
