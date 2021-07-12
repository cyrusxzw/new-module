import type { ComponentWithoutChildren, Themes, Variant } from '~/types';
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
  onFlyinOpenCloseClick?: (
    flyinStatus: 'open' | 'close',
    selectedVariant: Variant,
  ) => void;
  onUpsellClick?: () => void;
  onUpsellScrollIntoView?: () => void;
  paymentWidget?: React.ReactNode;
  theme?: Themes;
};

type ProductDetailHeaderType = ComponentWithoutChildren<ProductDetailHeaderProps>;

export type { ProductDetailHeaderProps, ProductDetailHeaderType };
