import React from 'react';
import { render } from '@testing-library/react';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import AddToCartButtonFixture from '~/components/AddToCartButton/AddToCartButton.fixture';
import mockAddToCartButtonOnClick from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import ProductCommerce from './ProductCommerce';
import ProductCommerceFixture from './ProductCommerce.fixture';

describe('<ProductCommerce />', () => {
  it('should be defined', () => {
    expect(ProductCommerce).toBeDefined();
  });

  it('renders base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <ProductDetailContextProvider product={product}>
          <VariantSelectContextProvider variants={variants}>
            <ProductCommerce
              copy={{
                addToCart: AddToCartButtonFixture.copy,
                ...ProductCommerceFixture.copy,
              }}
              cta={ProductCommerceFixture.cta}
              description={<p>ProductCommerceFixture.description</p>}
              eyebrow={ProductCommerceFixture.eyebrow}
              heading={ProductCommerceFixture.heading}
              onAddToCartClick={mockAddToCartButtonOnClick}
              productName={ProductCommerceFixture.productName}
              theme="dark"
              variants={ProductCommerceFixture.variantOptions}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
