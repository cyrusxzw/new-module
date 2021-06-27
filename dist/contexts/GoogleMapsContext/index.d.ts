import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type Options = {
    libraries?: string[];
    regionCode?: string;
    languageCode?: string;
};
declare type GoogleMapsContextProps = {
    apiKey?: string;
    options?: Options;
};
declare type GoogleMapsContextProviderType = ComponentWithChildren<GoogleMapsContextProps>;

declare const GoogleMapsContextProvider: GoogleMapsContextProviderType;
declare const useGoogleMapsContext: () => {
    googleMap: any;
    isLoading: boolean;
};

export { GoogleMapsContextProvider, useGoogleMapsContext };
