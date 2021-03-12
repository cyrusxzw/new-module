import React, { createContext, useContext, FC } from 'react';
import { useProductDetailStore } from './ProductDetailStore';
import type { ProductDetailContextProps } from './ProductDetailContext.types';

const ProductDetailContext = createContext(undefined);

const ProductDetailContextProvider: FC<ProductDetailContextProps> = ({
  children,
  product,
}) => (
  <ProductDetailContext.Provider value={useProductDetailStore(product)}>
    {children}
  </ProductDetailContext.Provider>
);

const useProductDetailContext = () => {
  const context = useContext(ProductDetailContext);

  if (context === undefined) {
    throw new Error(
      'useProductDetailContext must be used within a ProductDetailContextProvider',
    );
  }

  return context;
};

export { ProductDetailContextProvider, useProductDetailContext };
