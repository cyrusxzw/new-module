import React, { Fragment, FC } from 'react';
import { DefinitionList } from '../DefinitionList/DefinitionList';
import type { DefinitionListWithProductExtractProps } from './DefinitionListWithProductExtract.type';
import { ProductExtract } from '../ProductExtract/ProductExtract';

const defaultProduct = {
  image: {
    altText: 'Product Extract',
  },
};

const DefinitionListWithProductExtract: FC<DefinitionListWithProductExtractProps> = ({
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
    <Fragment>
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
    </Fragment>
  );
};

export { DefinitionListWithProductExtract };
