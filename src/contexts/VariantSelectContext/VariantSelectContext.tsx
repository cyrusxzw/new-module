import React, { createContext, useContext, FC } from 'react';
import { useVariantSelectStore } from './VariantSelectStore';
import type { VariantSelectContextProps } from './VariantSelectContext.types';

const VariantSelectContext = createContext(undefined);

const VariantSelectContextProvider: FC<VariantSelectContextProps> = ({
  children,
  variants,
}) => (
  <VariantSelectContext.Provider value={useVariantSelectStore(variants)}>
    {children}
  </VariantSelectContext.Provider>
);

const useVariantSelectContext = () => {
  const context = useContext(VariantSelectContext);

  if (context === undefined) {
    throw new Error(
      'useVariantSelectContext must be used within a VariantSelectContextProvider',
    );
  }

  return context;
};

export { VariantSelectContextProvider, useVariantSelectContext };
