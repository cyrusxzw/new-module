import React from 'react';

const GlobalNavigationStateContextProvider = ({ children }) => <>{children}</>;

const isOpen = false;
const setIsOpen = jest.fn();

const activeCollectionId = 'top';
const setActiveCollectionId = jest.fn();
const actions = {
  logo: 'link',
  search: 'trigger',
  cart: 'trigger',
  menu: 'onclick trigger',
}; // Refer to GlobalNavigation type
const mobileViewClosedTheme = 'dark';
const onOpen = jest.fn();

const useGlobalNavigationStateContext = jest
  .fn()
  .mockReturnValue({ isOpen, setIsOpen });

const GlobalNavigationContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationContext = jest
  .fn()
  .mockReturnValue({
    activeCollectionId,
    setActiveCollectionId,
    actions,
    mobileViewClosedTheme,
    onOpen,
  }); // TODO: Set default value here later

export {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
