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

const menuType = 'Shop';
const menuCategoryLabel = 'Category';
const setMenuType = jest.fn();
const setCategoryLabel = jest.fn();

const trackingCallbacks = {
  desktop: {
    promotionCardClick: jest.fn(),
    promotionCardImpression: jest.fn(),
    menuItemClick: jest.fn(),
    categoryItemClick: jest.fn(),
  },
  tablet: {
    tabletMenuItemClick: jest.fn(),
    tabletCategoryItemClick: jest.fn(),
  },
  mobile: {
    mobileMenuItemClick: jest.fn(),
    mobileCategoryItemClick: jest.fn(),
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
