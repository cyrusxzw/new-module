import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import type {
  TabletViewContextProviderType,
  TabletViewContextType,
  UseTabletViewContextStore,
} from './TabletView.types';

const TabletViewContext = createContext(undefined);

const useTabletViewContextStore: UseTabletViewContextStore = ({
  closedClassName,
  openClassName,
}) => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  return { closedClassName, openClassName, isShopOpen, setIsShopOpen };
};

const TabletViewContextProvider: TabletViewContextProviderType = ({
  children,
  closedClassName,
  openClassName,
}) => (
  <TabletViewContext.Provider
    value={useTabletViewContextStore({ closedClassName, openClassName })}
  >
    {children}
  </TabletViewContext.Provider>
);

const useTabletViewContext = (): TabletViewContextType => {
  const context = useContext(TabletViewContext);

  if (context === undefined) {
    throw new Error(
      'useTabletViewContext must be used within a TabletViewContextProvider',
    );
  }

  return context;
};

export { TabletViewContextProvider, useTabletViewContext };
