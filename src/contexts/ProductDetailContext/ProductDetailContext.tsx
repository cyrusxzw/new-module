import React, { createContext, useContext, FunctionComponent } from 'react';
import { Variant } from '~/contexts/VariantSelectContext';
import { useProductDetailStore } from './ProductDetailStore';

interface ProductProps {
  description?: string;
  id?: string;
  variantOptions?: Array<Variant>;
  cartDisclaimer?: string;
  definitionList?: Array<{
    term?: JSX.Element;
    description?: JSX.Element;
  }>;
  flyinPanel?: JSX.Element;
  productName: string;
  imageSize?: string;
  upSellProduct?: {
    image?: {
      altText?: string;
      small?: string;
    };
    name?: string;
    url?: string;
  };
}

interface ProductDetailContextProviderProps {
  product?: ProductProps;
}

const ProductDetailContext = createContext(undefined);

const ProductDetailContextProvider: FunctionComponent<ProductDetailContextProviderProps> = ({
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

export { ProductDetailContextProvider, useProductDetailContext, ProductProps };
