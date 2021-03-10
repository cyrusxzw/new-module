type Options = {
  libraries?: string[];
  regionCode?: string;
  languageCode?: string;
};

type Props = {
  apiKey?: string;
  options?: Options;
};

export type { Props, Options };
