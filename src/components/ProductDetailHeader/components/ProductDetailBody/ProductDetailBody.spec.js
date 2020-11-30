import React from 'react';
import renderer from 'react-test-renderer';
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

    const tree = renderer
      .create(
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
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
