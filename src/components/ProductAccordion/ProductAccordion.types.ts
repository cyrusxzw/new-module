import type { OnAddToCartClick } from '~/contexts/AddToCartContext/AddToCartContext.types';

import type {
  ProductAccordionItem,
  AddToCartCopy,
} from './components/ProductAccordionItem/ProductAccordionItem.types';

type Product = ProductAccordionItem & {
  handleAddToCart: OnAddToCartClick;
};

type ProductAccordionProps = {
  className?: string;
  id?: string;
  addToCartCopy?: AddToCartCopy;
  openIndex?: string;
  products: Product[];
};

export type { ProductAccordionProps };
