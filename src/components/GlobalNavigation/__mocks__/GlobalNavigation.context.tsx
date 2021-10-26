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

const read = {
  id: 'read',
};

const onOpen = jest.fn();

const menuType = 'Shop';
const menuCategoryLabel = 'Category';
const setMenuType = jest.fn();
const setCategoryLabel = jest.fn();

const trackingCallbacks = {
  desktop: {
    desktopMenuItemClickOrHover: jest.fn(),
    desktopCategoryItemClickOrHover: jest.fn(),
  },
  tablet: {
    tabletMenuItemClick: jest.fn(),
    tabletCategoryItemClick: jest.fn(),
  },
  mobile: {
    mobileMenuItemClick: jest.fn(),
    mobileCategoryItemClick: jest.fn(),
  },
  common: {
    promotionCardClick: jest.fn(),
    promotionCardImpression: jest.fn(),
  },
};

const useGlobalNavigationStateContext = jest.fn().mockReturnValue({
  isOpen,
  setIsOpen,
  activeCollectionId,
  menuCategoryLabel,
  menuType,
  setActiveCollectionId,
  setCategoryLabel,
  setMenuType,
});

const GlobalNavigationContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationContext = jest.fn().mockReturnValue({
  actions,
  read,
  onOpen,
  activeView,
  trackingCallbacks,
}); // TODO: Set default value here later

export {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
