import React, { createContext, useContext } from 'react';
import { useProductDetailStore } from './ProductDetailStore';
import type {
  ProductDetailContextType,
  ProductDetailContextProviderType,
} from './ProductDetailContext.types';

const ProductDetailContext = createContext(undefined);

const ProductDetailContextProvider: ProductDetailContextProviderType = ({
  children,
  product,
}) => (
  <ProductDetailContext.Provider value={useProductDetailStore(product)}>
    {children}
  </ProductDetailContext.Provider>
);

const useProductDetailContext = (): ProductDetailContextType => {
  const context = useContext(ProductDetailContext);

  if (context === undefined) {
    throw new Error(
      'useProductDetailContext must be used within a ProductDetailContextProvider',
    );
  }

  return context;
};

export { ProductDetailContextProvider, useProductDetailContext };
