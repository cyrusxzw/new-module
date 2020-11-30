import React from 'react';
import { render } from '@testing-library/react';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import mockAddToCartButtonOnClick from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import AddToCartButtonFixture from '~/components/AddToCartButton/AddToCartButton.fixture';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import ProductDetailBodyFixture from './ProductDetailBody.fixture';
import ProductDetailBody from './ProductDetailBody';

describe('<ProductDetailBody />', () => {
  it('should be defined', () => {
    expect(ProductDetailBody).toBeDefined();
  });

  it('renders base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <ProductDetailContextProvider product={product}>
          <VariantSelectContextProvider variants={variants}>
            <ProductDetailBody
              className={ProductDetailBodyFixture.className}
              copy={{
                addToCart: AddToCartButtonFixture.copy,
                ...ProductDetailBodyFixture.copy,
              }}
              theme={ProductDetailBodyFixture.theme}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
