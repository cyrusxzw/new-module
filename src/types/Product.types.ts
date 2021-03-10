import type { Variant } from '~/types';

type Product = {
  description?: string;
  id?: string;
  variantOptions?: Variant[];
  cartDisclaimer?: string;
  definitionList?: {
    term?: JSX.Element;
    description?: JSX.Element;
  }[];
  flyinPanel?: JSX.Element;
  productName: string;
  imageSize?: string;
  upSellProduct?: {
    image?: {
      altText?: string;
      small?: string;
    };
    name?: string;
    url?: string;
  };
};

export type { Product };
