import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import type {
  MobileViewContextProviderType,
  MobileViewContextType,
} from './MobileView.types';

const MobileViewContext = createContext(undefined);

const useMobileViewContextStore = () => {
  const [activeCollectionId, setActiveCollectionId] = useState('top');
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

  const handleOnBackButtonClick = () => {
    setActiveCollectionId('top');
    setActiveNestedCollectionIds([]);
  };

  return {
    activeCollectionId,
    activeNestedCollectionIds,
    onBackButtonClick: handleOnBackButtonClick,
    onNestedCollectionClick: handleOnNestedCollectionClick,
    setActiveCollectionId,
    setActiveNestedCollectionIds,
  };
};

const MobileViewContextProvider: MobileViewContextProviderType = ({
  children,
}) => (
  <MobileViewContext.Provider value={useMobileViewContextStore()}>
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
