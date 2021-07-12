import type { ComponentWithoutChildren, Themes } from '~/types';

type ProductDetailImageProps = {
  className?: string;
  theme?: Themes;
};

type ProductDetailImageType = ComponentWithoutChildren<ProductDetailImageProps>;

export type { ProductDetailImageProps, ProductDetailImageType };
