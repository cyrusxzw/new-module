import React from 'react';
import { render } from '@testing-library/react';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import { AddToCartButtonFixture } from '~/components/AddToCartButton/AddToCartButton.fixture';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import ProductGridItem from './ProductGridItem';
import ProductGridItemFixture from './ProductGridItem.fixture';

describe('<ProductGridItem />', () => {
  it('should be defined', () => {
    expect(ProductGridItem).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
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
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
