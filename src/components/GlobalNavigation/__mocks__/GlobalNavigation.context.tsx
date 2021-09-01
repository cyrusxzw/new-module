import React from 'react';

const GlobalNavigationStateContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationStateContext = jest
  .fn()
  .mockReturnValue({ isOpen: false, activeCollectionId: 'top' });

const GlobalNavigationContextProvider = ({ children }) => <>{children}</>;

const useGlobalNavigationContext = jest.fn().mockReturnValue({}); // TODO: Set default value here later

export {
  GlobalNavigationContextProvider,
  GlobalNavigationStateContextProvider,
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
};
