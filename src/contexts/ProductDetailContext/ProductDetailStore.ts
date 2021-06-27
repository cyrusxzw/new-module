import { useEffect, useState } from 'react';
import type { UseProductDetailStore } from './ProductDetailContext.types';

const useProductDetailStore: UseProductDetailStore = (product) => {
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
