import React from 'react';

const setActiveNestedCollectionIds = jest.fn();

const MobileViewContextProvider = ({ children }) => <>{children}</>;

const useMobileViewContext = jest
  .fn()
  .mockReturnValue({ setActiveNestedCollectionIds });

export { MobileViewContextProvider, useMobileViewContext };
