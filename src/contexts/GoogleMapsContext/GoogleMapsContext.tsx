import React, { createContext, useContext } from 'react';
import { useGoogleMapsStore } from './GoogleMapsStore';
import type { GoogleMapsContextProviderType } from './GoogleMapsContext.types';

const defaultValues = {
  googleMap: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

const GoogleMapsContextProvider: GoogleMapsContextProviderType = ({
  apiKey,
  children,
  options,
}) => (
  <GoogleMapsContext.Provider value={useGoogleMapsStore(apiKey, options)}>
    {children}
  </GoogleMapsContext.Provider>
);

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
