import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useGoogleMapsStore } from './GoogleMapsStore';

const defaultValues = {
  googleMaps: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

const GoogleMapsContextProvider = ({ apiKey, children, options }) => (
  <GoogleMapsContext.Provider value={useGoogleMapsStore(apiKey, options)}>
    {children}
  </GoogleMapsContext.Provider>
);

GoogleMapsContextProvider.propTypes = {
  apiKey: PropTypes.string,
  children: PropTypes.any,
  options: PropTypes.shape({
    libraries: PropTypes.arrayOf(PropTypes.string),
    regionCode: PropTypes.string,
    languageCode: PropTypes.string,
  }),
};

const useGoogleMapsContext = () => {
  const context = useContext(GoogleMapsContext);

  if (context === undefined) {
    throw new Error(
      'useGoogleMapsContext must be used within a GoogleMapsContextProvider',
    );
  }

  return context;
};

export { GoogleMapsContextProvider, useGoogleMapsContext };
