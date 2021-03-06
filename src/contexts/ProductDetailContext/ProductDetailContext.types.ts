import type { Dispatch, SetStateAction } from 'react';
import type { ComponentWithChildren, Product } from '~/types';

type ProductDetailContextType = {
  productDetail: Product;
  setProductDetail: Dispatch<SetStateAction<Product>>;
};

type UseProductDetailStore = (product: Product) => ProductDetailContextType;

type ProductDetailContextProps = {
  product?: Product;
};

type ProductDetailContextProviderType = ComponentWithChildren<ProductDetailContextProps>;

export {
  ProductDetailContextProps,
  ProductDetailContextType,
  ProductDetailContextProviderType,
  UseProductDetailStore,
};
