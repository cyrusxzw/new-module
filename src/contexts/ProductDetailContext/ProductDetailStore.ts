import { useEffect, useState } from 'react';
import { ProductProps } from './ProductDetailContext';

const useProductDetailStore = (product: ProductProps) => {
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
