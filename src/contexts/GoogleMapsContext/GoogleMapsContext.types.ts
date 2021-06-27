import { ComponentWithChildren } from '~/types';

type Options = {
  libraries?: string[];
  regionCode?: string;
  languageCode?: string;
};

type GoogleMapsContextProps = {
  apiKey?: string;
  options?: Options;
};

type GoogleMapsContextProviderType = ComponentWithChildren<GoogleMapsContextProps>;

export type { GoogleMapsContextProviderType, Options };
