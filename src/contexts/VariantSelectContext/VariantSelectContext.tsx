import React, { createContext, useContext, FunctionComponent } from 'react';
import { useVariantSelectStore } from './VariantSelectStore';

interface Variant {
  alternateAction: {
    url: string;
    label: string;
  };
  cartDisclaimer?: string;
  hasAgeVerificationRequirement?: boolean;
  id?: string;
  isInStock: boolean;
  isSellable?: boolean;
  image?: {
    altText?: string;
    sizes?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
  price: string;
  size: string;
  sku: string;
  tracking?: any;
}

interface VariantSelectContextProviderProps {
  variants: Array<Variant>;
}

const VariantSelectContext = createContext(undefined);

const VariantSelectContextProvider: FunctionComponent<VariantSelectContextProviderProps> = ({
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

export { VariantSelectContextProvider, useVariantSelectContext, Variant };
