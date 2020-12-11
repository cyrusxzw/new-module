import React from 'react';
import { render } from '@testing-library/react';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { AddToCartButtonFixture } from '~/components/AddToCartButton/AddToCartButton.fixture';
import { ProductDetailBodyFixture } from '~/components/ProductDetailHeader/components/ProductDetailBody/ProductDetailBody.fixture';
import { ProductDetailHeaderFixture } from './ProductDetailHeader.fixture';
import { ProductDetailHeader } from './ProductDetailHeader';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';

describe('<ProductDetailHeader />', () => {
  it('should be defined', () => {
    expect(ProductDetailHeader).toBeDefined();
  });

  it('should render base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <ProductDetailContextProvider product={product}>
          <VariantSelectContextProvider variants={variants}>
            <ProductDetailHeader
              breadcrumbs={ProductDetailHeaderFixture.breadcrumbs}
              className={ProductDetailHeaderFixture.className}
              copy={{
                addToCart: AddToCartButtonFixture.copy,
                size: ProductDetailBodyFixture.copy.size,
                ingredients: ProductDetailBodyFixture.copy.ingredients,
                upSellProductLabel:
                  ProductDetailBodyFixture.copy.upSellProductLabel,
              }}
              theme={ProductDetailHeaderFixture.theme}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
