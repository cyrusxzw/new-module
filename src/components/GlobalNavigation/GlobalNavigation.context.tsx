import React, { createContext, useContext, useEffect, useState } from 'react';
import type {
  GlobalNavigationStateContextProviderType,
  GlobalNavigationStateContextType,
  UseGlobalNavigationStateStore,
  GlobalNavigationContextProviderType,
  GlobalNavigationContextType,
  UseGlobalNavigationStore,
} from './GlobalNavigation.types';

const GlobalNavigationStateContext = createContext(undefined);

const useGlobalNavigationStateStore: UseGlobalNavigationStateStore = () => {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
};

const GlobalNavigationStateContextProvider: GlobalNavigationStateContextProviderType = ({
  children,
}) => (
  <GlobalNavigationStateContext.Provider
    value={useGlobalNavigationStateStore()}
  >
    {children}
  </GlobalNavigationStateContext.Provider>
);

const useGlobalNavigationStateContext = (): GlobalNavigationStateContextType => {
  const context = useContext(GlobalNavigationStateContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalNavigationStateContext must be used within a GlobalNavigationStateContextProvider',
    );
  }

  return context;
};

const GlobalNavigationContext = createContext(undefined);

/** keeping store incase of any programatic changes */
const useGlobalNavigationStore: UseGlobalNavigationStore = (value) => value;

const GlobalNavigationContextProvider: GlobalNavigationContextProviderType = ({
  children,
  value,
}) => (
  <GlobalNavigationContext.Provider value={useGlobalNavigationStore(value)}>
    {children}
  </GlobalNavigationContext.Provider>
);

const useGlobalNavigationContext = (): GlobalNavigationContextType => {
  const context = useContext(GlobalNavigationContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalNavigationContext must be used within a GlobalNavigationContextProvider',
    );
  }

  return context;
};

export {
  GlobalNavigationStateContextProvider,
  useGlobalNavigationStateContext,
  GlobalNavigationContextProvider,
  useGlobalNavigationContext,
};
