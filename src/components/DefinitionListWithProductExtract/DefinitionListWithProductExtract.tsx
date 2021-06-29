import React, { Fragment } from 'react';
import { DefinitionList } from '../DefinitionList/DefinitionList';
import type { DefinitionListWithProductExtractType } from './DefinitionListWithProductExtract.type';
import { ProductExtract } from '../ProductExtract/ProductExtract';

const defaultProduct = {
  image: {
    altText: 'Product Extract',
  },
};

const DefinitionListWithProductExtract: DefinitionListWithProductExtractType = ({
  dataTestRef,
  isVisible = true,
  itemBottomBorder = false,
  items = [],
  product = defaultProduct,
  productBottomBorder = false,
  productItemNumber = 1,
  theme = 'dark',
  works = 'Works well with',
}) => {
  return (
    <>
      <DefinitionList
        hasBottomBorder={itemBottomBorder}
        isVisible={isVisible}
        items={items}
        theme={theme}
      />
      <ProductExtract
        dataTestRef={dataTestRef}
        hasBottomBorder={productBottomBorder}
        isVisible={isVisible}
        itemNum={productItemNumber}
        product={product}
        theme={theme}
        works={works}
      />
    </>
  );
};

export { DefinitionListWithProductExtract };
