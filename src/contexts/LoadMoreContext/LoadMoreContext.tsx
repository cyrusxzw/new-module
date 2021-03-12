import React, { createContext, useContext, FC } from 'react';
import { useLoadMoreStore } from './LoadMoreStore';
import type { LoadMoreContextProps } from './LoadMoreContext.types';

const LoadMoreContext = createContext(undefined);

const LoadMoreContextProvider: FC<LoadMoreContextProps> = ({
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
