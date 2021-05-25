import type { Themes, Variant } from '~/types';
import type { BreadcrumbItem } from '~/components/Breadcrumbs/Breadcrumbs.types';
import type { ProductDetailBodyCopy } from './components/ProductDetailBody/ProductDetailBody.types';

type Breadcrumbs = {
  items?: BreadcrumbItem[];
  theme?: Themes;
};

type ProductDetailHeaderProps = {
  breadcrumbs?: Breadcrumbs;
  className?: string;
  copy?: ProductDetailBodyCopy;
  onBreadcrumbClick?: (item: BreadcrumbItem, selectedVariant: Variant) => void;
  theme?: Themes;
};

export type { ProductDetailHeaderProps };
