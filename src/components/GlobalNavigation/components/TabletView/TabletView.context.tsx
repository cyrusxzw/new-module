import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import type {
  TabletViewContextProviderType,
  TabletViewContextType,
  UseTabletViewContextStore,
} from './TabletView.types';

const TabletViewContext = createContext(undefined);

const useTabletViewContextStore: UseTabletViewContextStore = (props) => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  return { ...props, isShopOpen, setIsShopOpen };
};

const TabletViewContextProvider: TabletViewContextProviderType = ({
  children,
  ...restProps
}) => (
  <TabletViewContext.Provider value={useTabletViewContextStore(restProps)}>
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
