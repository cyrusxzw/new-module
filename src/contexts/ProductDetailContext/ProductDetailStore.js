import { useEffect, useState } from 'react';

const defaultState = {
  cartDisclaimer: '',
  definitionList: [],
  description: '',
  id: '',
  image: null,
  ingredients: '',
  keyIngredient: '',
  productName: '',
  upSellProduct: null,
  variantOptions: [],
};

const useProductDetailStore = (product = defaultState.productDetail) => {
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
