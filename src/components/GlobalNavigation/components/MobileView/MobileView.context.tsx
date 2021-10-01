import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import type {
  MobileViewContextProviderType,
  MobileViewContextType,
} from './MobileView.types';

const MobileViewContext = createContext(undefined);

const useMobileViewContextStore = ({
  closedClassName,
  closedTheme,
  openClassName,
}) => {
  const [activeNestedCollectionIds, setActiveNestedCollectionIds] = useState(
    [],
  );

  const handleOnNestedCollectionClick = (id: string) => {
    setActiveNestedCollectionIds((currentState) => {
      if (currentState.includes(id)) {
        return currentState.filter((item) => item !== id);
      }

      return [...currentState, id];
    });
  };

  return {
    activeNestedCollectionIds,
    closedClassName,
    closedTheme,
    onNestedCollectionClick: handleOnNestedCollectionClick,
    openClassName,
    setActiveNestedCollectionIds,
  };
};

const MobileViewContextProvider: MobileViewContextProviderType = ({
  children,
  closedClassName,
  closedTheme,
  openClassName,
}) => (
  <MobileViewContext.Provider
    value={useMobileViewContextStore({
      closedClassName,
      closedTheme,
      openClassName,
    })}
  >
    {children}
  </MobileViewContext.Provider>
);

const useMobileViewContext = (): MobileViewContextType => {
  const context = useContext(MobileViewContext);

  if (context === undefined) {
    throw new Error(
      'useMobileViewContext must be used within a MobileViewContextProvider',
    );
  }

  return context;
};

export { MobileViewContextProvider, useMobileViewContext };
