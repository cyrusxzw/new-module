import React, { createContext, useContext } from 'react';
import { useVariantSelectStore } from './VariantSelectStore';
import type {
  VariantSelectContextType,
  VariantSelectContextProviderType,
} from './VariantSelectContext.types';

const VariantSelectContext = createContext(undefined);

const VariantSelectContextProvider: VariantSelectContextProviderType = ({
  children,
  variants,
  selectedVariantIndex,
}) => (
  <VariantSelectContext.Provider
    value={useVariantSelectStore(variants, selectedVariantIndex)}
  >
    {children}
  </VariantSelectContext.Provider>
);

const useVariantSelectContext = (): VariantSelectContextType => {
  const context = useContext(VariantSelectContext);

  if (context === undefined) {
    throw new Error(
      'useVariantSelectContext must be used within a VariantSelectContextProvider',
    );
  }

  return context;
};

export { VariantSelectContextProvider, useVariantSelectContext };
