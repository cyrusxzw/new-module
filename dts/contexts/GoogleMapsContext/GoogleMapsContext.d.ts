import { FC } from 'react';
import type { GoogleMapsContextProps } from './GoogleMapsContext.types';
declare const GoogleMapsContextProvider: FC<GoogleMapsContextProps>;
declare const useGoogleMapsContext: () => {
  googleMap: any;
  isLoading: boolean;
};
export { GoogleMapsContextProvider, useGoogleMapsContext };
