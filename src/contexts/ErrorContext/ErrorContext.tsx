import React, { createContext, useContext } from 'react';
import type { ReactElement } from 'react';
import type { ErrorContextProps } from './ErrorContext.types';

const ErrorContext = createContext(undefined);

const ErrorContextProvider = ({
  children,
  error,
}: ErrorContextProps): ReactElement => (
  <ErrorContext.Provider value={error}>{children}</ErrorContext.Provider>
);

const useErrorContext = (): string => {
  const useErrorContext = useContext(ErrorContext);

  return useErrorContext;
};

export { ErrorContextProvider, useErrorContext };
