import React, { createContext, useContext } from 'react';
import { useLoadMoreStore } from './LoadMoreStore';
import type { LoadMoreContextProviderType } from './LoadMoreContext.types';

const LoadMoreContext = createContext(undefined);

const LoadMoreContextProvider: LoadMoreContextProviderType = ({
  children,
  onClick,
}) => (
  <LoadMoreContext.Provider value={useLoadMoreStore(onClick)}>
    {children}
  </LoadMoreContext.Provider>
);

const useLoadMoreContext = () => {
  const context = useContext(LoadMoreContext);

  if (context === undefined) {
    throw new Error(
      'useLoadMoreContext must be used within a LoadMoreContextProvider',
    );
  }

  return context;
};

export { LoadMoreContextProvider, useLoadMoreContext };
