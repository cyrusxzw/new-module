import React from 'react';
import { createContext, useContext } from 'react';
import type { MobileNavigationContextProviderType } from './MobileNavigation.types';

const MobileNavigationContext = createContext(undefined);

const MobileNavigationContextProvider: MobileNavigationContextProviderType = ({
  activeId,
  activeNestedIds,
  children,
  onBackButtonClick,
  onClick,
  onNestedClick,
}) => (
  <MobileNavigationContext.Provider
    value={{
      activeId,
      activeNestedIds,
      onClick,
      onNestedClick,
      onBackButtonClick,
    }}
  >
    {children}
  </MobileNavigationContext.Provider>
);

const useMobileNavigationContext = () => {
  const context = useContext(MobileNavigationContext);

  if (context === undefined) {
    throw new Error(
      'useMobileNavigationContext must be used within a MobileNavigationContextProvider',
    );
  }

  return context;
};

export { MobileNavigationContextProvider, useMobileNavigationContext };
