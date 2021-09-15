import React from 'react';

const setActiveNestedCollectionIds = jest.fn();
const onNestedCollectionClick = jest.fn();
const activeNestedCollectionIds = ['by skin type'];
const closedTheme = 'dark';

const MobileViewContextProvider = ({ children }) => <>{children}</>;

const useMobileViewContext = jest.fn().mockReturnValue({
  setActiveNestedCollectionIds,
  onNestedCollectionClick,
  activeNestedCollectionIds,
  closedTheme,
});

export { MobileViewContextProvider, useMobileViewContext };
