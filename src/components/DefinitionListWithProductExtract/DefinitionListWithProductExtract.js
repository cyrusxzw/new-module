import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DefinitionList } from '../DefinitionList/DefinitionList';
import { ProductExtract } from '../ProductExtract/ProductExtract';

const DefinitionListWithProductExtract = ({
  dataTestRef,
  isVisible,
  itemBottomBorder,
  items,
  product,
  productBottomBorder,
  productItemNumber,
  theme,
  works,
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

DefinitionListWithProductExtract.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  itemBottomBorder: PropTypes.bool,
  items: PropTypes.array,
  productBottomBorder: PropTypes.bool,
  productItemNumber: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
  works: PropTypes.string,
};

DefinitionListWithProductExtract.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  isVisible: true,
  itemBottomBorder: false,
  items: [],
  productBottomBorder: false,
  productItemNumber: 1,
  product: {
    image: {
      altText: 'Product Extract',
    },
  },
  theme: 'dark',
  works: 'Works well with',
};

export { DefinitionListWithProductExtract };
