import { FC } from 'react';

declare type Options = {
    libraries?: string[];
    regionCode?: string;
    languageCode?: string;
};
declare type GoogleMapsContextProps = {
    apiKey?: string;
    options?: Options;
};

declare const GoogleMapsContextProvider: FC<GoogleMapsContextProps>;
declare const useGoogleMapsContext: () => {
    googleMap: any;
    isLoading: boolean;
};

export { GoogleMapsContextProvider, useGoogleMapsContext };
