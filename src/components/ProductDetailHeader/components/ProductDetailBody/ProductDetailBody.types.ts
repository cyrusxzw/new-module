import type { Themes } from '~/types';

type ProductDetailBodyCopy = {
  addToCart?: {
    cartAction?: string;
    updateNotification?: string;
    outOfStock?: {
      label?: string;
      title?: string;
    };
  };
  size?: {
    singular?: string;
    plural?: string;
  };
  upSellProductLabel?: string;
  flyinPanelHeading?: string;
};

type ProductDetailBodyProps = {
  className?: string;
  copy: ProductDetailBodyCopy;
  theme?: Themes;
};

export type { ProductDetailBodyProps, ProductDetailBodyCopy };
