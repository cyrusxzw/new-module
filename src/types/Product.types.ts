import type { Variant } from '~/types';
import type { DefinitionListItem } from '~/components/DefinitionList/DefinitionList.types';

type ProductDefinitionListItem = DefinitionListItem & {
  isExpandable?: boolean;
};

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
  definitionList?: ProductDefinitionListItem[];
  description?: string;
  flyinPanel?: React.ReactNode;
  id?: string;
  image?: {
    altText?: string;
    sizes?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
  imageSize?: string;
  productName: string;
  sku: string;
  upSellProduct?: UpSellProduct;
  variantOptions?: Variant[];
};

export type { Product };
