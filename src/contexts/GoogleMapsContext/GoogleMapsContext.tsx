import React, { createContext, useContext, FC } from 'react';
import { useGoogleMapsStore } from './GoogleMapsStore';
import type { GoogleMapsContextProps } from './GoogleMapsContext.types';

const defaultValues = {
  googleMap: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

const GoogleMapsContextProvider: FC<GoogleMapsContextProps> = ({
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
