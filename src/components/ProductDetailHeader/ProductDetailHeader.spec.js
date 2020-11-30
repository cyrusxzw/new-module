import React from 'react';
import renderer from 'react-test-renderer';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import AddToCartButtonFixture from '~/components/AddToCartButton/AddToCartButton.fixture';
import ProductDetailBodyFixture from '~/components/ProductDetailHeader/components/ProductDetailBody/ProductDetailBody.fixture';
import ProductDetailHeaderFixture from './ProductDetailHeader.fixture';
import ProductDetailHeader from './ProductDetailHeader';
import mockAddToCartButtonOnClick from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';

describe('<ProductDetailHeader />', () => {
  it('should be defined', () => {
    expect(ProductDetailHeader).toBeDefined();
  });

  it('renders base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const tree = renderer
      .create(
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
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
