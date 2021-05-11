import type { Themes } from '~/types';
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
  theme?: Themes;
};

export type { ProductDetailHeaderProps };
