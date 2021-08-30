import React, { createContext, useContext, useState } from 'react';
import type {
  GlobalNavigationContextProviderType,
  GlobalNavigationContextType,
  GlobalNavigationStateContextProviderType,
  GlobalNavigationStateContextType,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
} from './GlobalNavigation.types';

const GlobalNavigationStateContext = createContext(undefined);

const useGlobalNavigationStateStore: UseGlobalNavigationStateStore = ({
  isOpen: initialIsOpen = false,
  activeCollectionId: initialActiveCollectionId = 'top',
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [activeCollectionId, setActiveCollectionId] = useState(
    initialActiveCollectionId,
  );

  return {
    activeCollectionId,
    isOpen,
    setActiveCollectionId,
    setIsOpen,
  };
};

const GlobalNavigationStateContextProvider: GlobalNavigationStateContextProviderType = ({
  children,
  isOpen,
  activeCollectionId,
}) => (
  <GlobalNavigationStateContext.Provider
    value={useGlobalNavigationStateStore({ isOpen, activeCollectionId })}
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
const useGlobalNavigationStore: UseGlobalNavigationStore = (
  value: GlobalNavigationContextType,
): GlobalNavigationContextType => value;

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
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
