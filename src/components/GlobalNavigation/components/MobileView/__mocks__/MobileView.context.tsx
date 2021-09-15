import React from 'react';

const setActiveNestedCollectionIds = jest.fn();
const closedTheme = 'dark';

const MobileViewContextProvider = ({ children }) => <>{children}</>;

const useMobileViewContext = jest
  .fn()
  .mockReturnValue({ setActiveNestedCollectionIds, closedTheme });

export { MobileViewContextProvider, useMobileViewContext };
