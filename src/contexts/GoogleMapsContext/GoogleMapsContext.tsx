import React, { createContext, useContext, FunctionComponent } from 'react';
import { useGoogleMapsStore } from './GoogleMapsStore';

interface Options {
  libraries?: Array<string>;
  regionCode?: string;
  languageCode?: string;
}

interface GoogleMapsContextProviderProps {
  apiKey?: string;
  options?: Options;
}

const defaultValues = {
  googleMap: null,
  isLoading: false,
};

const GoogleMapsContext = createContext(defaultValues);

const GoogleMapsContextProvider: FunctionComponent<GoogleMapsContextProviderProps> = ({
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

export { GoogleMapsContextProvider, useGoogleMapsContext, Options };
