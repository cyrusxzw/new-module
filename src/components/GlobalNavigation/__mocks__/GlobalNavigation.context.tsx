import React from 'react';

const GlobalNavigationStateContextProvider = ({ children }) => <>{children}</>;

const isOpen = false;
const activeView = 'desktop';
const setIsOpen = jest.fn();

const activeCollectionId = 'top';
const setActiveCollectionId = jest.fn();
const actions = {
  stores: 'trigger',
  search: 'trigger',
  cart: 'trigger',
  menu: 'onclick trigger',
}; // Refer to GlobalNavigation type
const onOpen = jest.fn();

const useGlobalNavigationStateContext = jest.fn().mockReturnValue({
  isOpen,
  setIsOpen,
  activeCollectionId,
  setActiveCollectionId,
});

const GlobalNavigationContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationContext = jest.fn().mockReturnValue({
  actions,
  onOpen,
  activeView,
}); // TODO: Set default value here later

export {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
