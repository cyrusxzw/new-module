import React, { createContext, useContext } from 'react';
import type { ReactElement } from 'react';
import type { IEErrorContextProps } from './IEErrorContext.types';

const IEErrorContext = createContext(undefined);

const IEErrorContextProvider = ({
  children,
  error,
}: IEErrorContextProps): ReactElement => (
  <IEErrorContext.Provider value={error}>{children}</IEErrorContext.Provider>
);

const useIEErrorContext = (): string => {
  const iEErrorContext = useContext(IEErrorContext);

  return iEErrorContext;
};

export { IEErrorContextProvider, useIEErrorContext };
