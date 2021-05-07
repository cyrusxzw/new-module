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
  /** @TODO Remove @ts-ignore and eslint-disable once ProductExtract is migrated to TS */
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  return (
    <Fragment>
      <DefinitionList
        hasBottomBorder={itemBottomBorder}
        isVisible={isVisible}
        items={items}
        theme={theme}
      />
      <ProductExtract
        // @ts-ignore
        dataTestRef={dataTestRef}
        // @ts-ignore
        hasBottomBorder={productBottomBorder}
        // @ts-ignore
        isVisible={isVisible}
        // @ts-ignore
        itemNum={productItemNumber}
        // @ts-ignore
        product={product}
        // @ts-ignore
        theme={theme}
        // @ts-ignore
        works={works}
      />
    </Fragment>
  );
  /* eslint-enable @typescript-eslint/ban-ts-comment */
};

export { DefinitionListWithProductExtract };
