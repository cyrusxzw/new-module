import React from 'react';
import renderer from 'react-test-renderer';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import AddToCartButton from './AddToCartButton';
import AddToCartButtonFixture from './AddToCartButton.fixture';
import mockAddToCartButtonOnClick from './__mocks__/AddToCartButton.onClick';

describe('<AddToCartButton />', () => {
  it('should be defined', () => {
    expect(AddToCartButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
          <ProductDetailContextProvider
            product={ProductDetailHeaderFixture.product}
          >
            <VariantSelectContextProvider
              variants={ProductDetailHeaderFixture.product.variantOptions}
            >
              <AddToCartButton
                className={AddToCartButtonFixture.className}
                copy={AddToCartButtonFixture.copy}
                isEnabled={AddToCartButtonFixture.isEnabled}
              />
            </VariantSelectContextProvider>
          </ProductDetailContextProvider>
        </AddToCartContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders out of stock button correctly', () => {
    const tree = renderer
      .create(
        <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
          <ProductDetailContextProvider
            product={ProductDetailHeaderFixture.product}
          >
            <VariantSelectContextProvider
              variants={ProductDetailHeaderFixture.variantOutOfStock}
            >
              <AddToCartButton
                className={AddToCartButtonFixture.className}
                copy={AddToCartButtonFixture.copy}
                dataTestRef={AddToCartButtonFixture.dataTestRef}
                isEnabled={AddToCartButtonFixture.isEnabled}
              />
            </VariantSelectContextProvider>
          </ProductDetailContextProvider>
        </AddToCartContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
