import { useEffect, useState } from 'react';
import type { Product } from '~/types';

const useProductDetailStore = (product: Product) => {
  const [productDetail, setProductDetail] = useState(product);

  useEffect(() => {
    setProductDetail(product);
  }, [product]);

  return {
    productDetail,
    setProductDetail,
  };
};

export { useProductDetailStore };
