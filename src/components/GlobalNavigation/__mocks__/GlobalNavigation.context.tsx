import React from 'react';

const GlobalNavigationStateContextProvider = ({ children }) => <>{children}</>;

const isOpen = false;
const activeCollectionId = 'top';
const setActiveCollectionId = jest.fn();

const useGlobalNavigationStateContext = jest.fn();

const GlobalNavigationContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationContext = jest
  .fn()
  .mockReturnValue({ isOpen, activeCollectionId, setActiveCollectionId }); // TODO: Set default value here later

export {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
