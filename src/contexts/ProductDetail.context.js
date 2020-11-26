import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useProductDetail } from '~/customHooks';

const defaultValues = {
  productDetail: {
    description: '',
    id: '',
    variantOptions: [],
    cartDisclaimer: '',
    definitionList: [],
    flyinPanel: '',
    productName: '',
    upSellProduct: null,
    imageSize: 'Small',
  },
};

const ProductDetailContext = createContext(defaultValues);

export const ProductDetailContextProvider = ({ children, product }) => (
  <ProductDetailContext.Provider value={useProductDetail(product)}>
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

export const useProductDetailContext = () => useContext(ProductDetailContext);

export default {
  ProductDetailContextProvider,
  useProductDetailContext,
};
