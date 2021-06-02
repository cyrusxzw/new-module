import type { Variant } from '~/types';
import type { DefinitionListItem } from '~/components/DefinitionList/DefinitionList.types';

type UpSellProduct = {
  image?: {
    altText?: string;
    small?: string;
  };
  name?: string;
  url?: string;
};

type Product = {
  cartDisclaimer?: string;
  definitionList?: DefinitionListItem[];
  description?: string;
  flyinPanel?: React.ReactNode;
  id?: string;
  imageSize?: string;
  productName: string;
  sku: string;
  upSellProduct?: UpSellProduct;
  variantOptions?: Variant[];
};

export type { Product };
