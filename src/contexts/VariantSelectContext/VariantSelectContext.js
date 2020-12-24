import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useVariantSelectStore } from './VariantSelectStore';

const VariantSelectContext = createContext();

const VariantSelectContextProvider = ({ children, variants }) => (
  <VariantSelectContext.Provider value={useVariantSelectStore(variants)}>
    {children}
  </VariantSelectContext.Provider>
);

VariantSelectContextProvider.propTypes = {
  children: PropTypes.any,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      alternateAction: PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string,
      }),
      cartDisclaimer: PropTypes.string,
      hasAgeVerificationRequirement: PropTypes.bool,
      id: PropTypes.string,
      isInStock: PropTypes.bool.isRequired,
      isSellable: PropTypes.bool,
      image: PropTypes.shape({
        altText: PropTypes.string,
        sizes: PropTypes.shape({
          large: PropTypes.string,
          medium: PropTypes.string,
          small: PropTypes.string,
        }),
      }),
      price: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      tracking: PropTypes.object,
    }),
  ),
};

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
