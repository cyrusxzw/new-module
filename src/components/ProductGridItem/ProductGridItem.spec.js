import React from 'react';
import renderer from 'react-test-renderer';
import {
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import AddToCartButtonFixture from '~/components/AddToCartButton/AddToCartButton.fixture';
import ProductGridItem from './ProductGridItem';
import ProductGridItemFixture from './ProductGridItem.fixture';

describe('<ProductGridItem />', () => {
  it('should be defined', () => {
    expect(ProductGridItem).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductDetailContextProvider
          product={ProductDetailHeaderFixture.product}
        >
          <VariantSelectContextProvider
            variants={ProductGridItemFixture.variantOptions}
          >
            <ProductGridItem
              copy={{
                addToCart: AddToCartButtonFixture.copy,
                ...ProductGridItemFixture.copy,
              }}
              info={ProductGridItemFixture.info}
              url={ProductGridItemFixture.url}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
