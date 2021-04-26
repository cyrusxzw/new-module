/// <reference types="react" />
import type { Product } from '~/types';
declare const useProductDetailStore: (
  product: Product,
) => {
  productDetail: Product;
  setProductDetail: import('react').Dispatch<
    import('react').SetStateAction<Product>
  >;
};
export { useProductDetailStore };
