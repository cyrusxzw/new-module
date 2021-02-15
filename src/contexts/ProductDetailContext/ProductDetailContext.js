import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useProductDetailStore } from './ProductDetailStore';

const ProductDetailContext = createContext();

const ProductDetailContextProvider = ({ children, product }) => (
  <ProductDetailContext.Provider value={useProductDetailStore(product)}>
    {children}
  </ProductDetailContext.Provider>
);

ProductDetailContextProvider.propTypes = {
  children: PropTypes.any,
  product: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    variantOptions: PropTypes.array,
    cartDisclaimer: PropTypes.string,
    definitionList: PropTypes.arrayOf(
      PropTypes.shape({
        term: PropTypes.node,
        description: PropTypes.node,
      }),
    ),
    flyinPanel: PropTypes.string,
    hasFlyinPanelHeading: PropTypes.bool,
    productName: PropTypes.string.isRequired,
    imageSize: PropTypes.string,
  }),
  upSellProduct: PropTypes.shape({
    image: PropTypes.shape({
      altText: PropTypes.string,
      small: PropTypes.string,
    }),
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

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
