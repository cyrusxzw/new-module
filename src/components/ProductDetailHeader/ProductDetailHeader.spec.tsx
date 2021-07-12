import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { ProductDetailBodyFixture } from '~/components/ProductDetailHeader/components/ProductDetailBody/ProductDetailBody.fixture';
import { AddToCartButtonFixture } from '~/components/AddToCartButton/AddToCartButton.fixture';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { ProductDetailHeader } from './ProductDetailHeader';
import { ProductDetailHeaderFixture } from './ProductDetailHeader.fixture';

describe('<ProductDetailHeader />', () => {
  it('should render the content and image UI', () => {
    const copy = {
      addToCart: AddToCartButtonFixture.copy,
      size: ProductDetailBodyFixture.copy.size,
      upSellProductLabel: ProductDetailBodyFixture.copy.upSellProductLabel,
      flyinPanelHeading: ProductDetailBodyFixture.copy.flyinPanelHeading,
    };

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <ProductDetailContextProvider
          product={ProductDetailHeaderFixture.product}
        >
          <VariantSelectContextProvider
            variants={ProductDetailHeaderFixture.product.variantOptions}
          >
            <ProductDetailHeader
              breadcrumbs={ProductDetailHeaderFixture.breadcrumbs}
              className={ProductDetailHeaderFixture.className}
              copy={copy}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    expect(
      screen.queryByTestId(/data-testid-ProductDetailHeader-content/i),
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId(/data-testid-ProductDetailHeader-image/i),
    ).toBeInTheDocument();
  });
});
