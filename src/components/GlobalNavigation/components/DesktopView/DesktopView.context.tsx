import React from 'react';
import { createContext, useContext } from 'react';
import type {
  DesktopViewContextProviderType,
  DesktopViewContextType,
  UseDesktopViewContextStore,
} from './DesktopView.types';

const DesktopViewContext = createContext(undefined);

const useDesktopViewContextStore: UseDesktopViewContextStore = (props) => props;

const DesktopViewContextProvider: DesktopViewContextProviderType = ({
  children,
  ...restProps
}) => (
  <DesktopViewContext.Provider value={useDesktopViewContextStore(restProps)}>
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
