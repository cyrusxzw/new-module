import { useEffect, useState } from 'react';

const defaultState = {
  productDetail: {
    description: '',
    id: '',
    variantOptions: [],
    cartDisclaimer: '',
    definitionList: [],
    flyinPanel: '',
    productName: '',
    upSellProduct: null,
    imageSize: 'Small',
  },
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
