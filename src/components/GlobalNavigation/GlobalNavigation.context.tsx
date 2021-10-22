import React, { createContext, useContext, useState } from 'react';
import { useActiveView } from './GlobalNavigation.hooks';
import type {
  GlobalNavigationContextProviderType,
  GlobalNavigationContextType,
  GlobalNavigationStateContextProviderType,
  MenuType,
  UseGlobalNavigationStateContext,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
} from './GlobalNavigation.types';

const GlobalNavigationStateContext = createContext(undefined);

const useGlobalNavigationStateStore: UseGlobalNavigationStateStore = ({
  isOpen: initialIsOpen = false,
  activeCollectionId: initialActiveCollectionId = 'top',
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const { activeView } = useActiveView();
  const [activeCollectionId, setActiveCollectionId] = useState(
    initialActiveCollectionId,
  );
  const [menuCategoryLabel, setMenuCategoryLabel] = useState('');
  const [menuType, setMenuType] = useState<MenuType>('Menu');

  const [stickyNavProps, setStickyNavProps] = useState({
    isFixed: false,
    isHidden: false,
    offsetTop: 0,
  });

  return {
    activeCollectionId,
    activeView,
    isOpen,
    menuCategoryLabel,
    menuType,
    setActiveCollectionId,
    setIsOpen,
    setMenuCategoryLabel,
    setMenuType,
    setStickyNavProps,
    stickyNavProps,
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

const useGlobalNavigationStateContext: UseGlobalNavigationStateContext = () => {
  const context = useContext(GlobalNavigationStateContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalNavigationStateContext must be used within a GlobalNavigationStateContextProvider',
    );
  }

  return context;
};

const GlobalNavigationContext = createContext(undefined);

const useGlobalNavigationStore: UseGlobalNavigationStore = (
  value: GlobalNavigationContextType,
): GlobalNavigationContextType => {
  const { activeCollectionId } = useGlobalNavigationStateContext();

  return {
    ...value,
    isLegacyMenu: value.actions?.[activeCollectionId]?.isLegacyMenu,
  };
};

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
