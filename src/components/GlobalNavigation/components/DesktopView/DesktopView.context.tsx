import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  UseDesktopViewContextStore,
} from './DesktopView.types';

const DesktopViewContext = createContext(undefined);

const useDesktopViewContextStore: UseDesktopViewContextStore = ({
  closedClassName,
  openClassName,
}) => {
  return { closedClassName, openClassName };
};

const DesktopViewContextProvider: DesktopViewContextProviderType = ({
  children,
  closedClassName,
  openClassName,
}) => (
  <DesktopViewContext.Provider
    value={useDesktopViewContextStore({ closedClassName, openClassName })}
  >
    {children}
  </DesktopViewContext.Provider>
);

const useDesktopViewContext = (): DesktopViewContextType => {
  const context = useContext(DesktopViewContext);

  if (context === undefined) {
    throw new Error(
      'useDesktopViewContext must be used within a DesktopViewContextProvider',
    );
  }

  return context;
};

export { DesktopViewContextProvider, useDesktopViewContext };
