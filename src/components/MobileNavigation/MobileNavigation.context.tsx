import React from 'react';
import { createContext, useContext } from 'react';
import type {
  MobileNavigationContextProviderType,
  MobileNavigationContextProviderProps,
} from './MobileNavigation.types';

const MobileNavigationContext = createContext(undefined);

const MobileNavigationContextProvider: MobileNavigationContextProviderType = ({
  children,
  ...props
}) => (
  <MobileNavigationContext.Provider value={props}>
    {children}
  </MobileNavigationContext.Provider>
);

const useMobileNavigationContext = (): MobileNavigationContextProviderProps => {
  const context = useContext(MobileNavigationContext);

  if (context === undefined) {
    throw new Error(
      'useMobileNavigationContext must be used within a MobileNavigationContextProvider',
    );
  }

  return context;
};

export { MobileNavigationContextProvider, useMobileNavigationContext };
