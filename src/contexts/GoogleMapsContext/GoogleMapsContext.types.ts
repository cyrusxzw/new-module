type Options = {
  libraries?: string[];
  regionCode?: string;
  languageCode?: string;
};

type GoogleMapsContextProps = {
  apiKey?: string;
  options?: Options;
};

export type { GoogleMapsContextProps, Options };
