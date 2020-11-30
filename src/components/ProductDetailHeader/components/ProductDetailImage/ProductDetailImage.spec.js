import React from 'react';
import renderer from 'react-test-renderer';
import {
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import ProductDetailImageFixture from './ProductDetailImage.fixture';
import ProductDetailImage from './ProductDetailImage';

describe('<ProductDetailImage />', () => {
  it('should be defined', () => {
    expect(ProductDetailImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const tree = renderer
      .create(
        <ProductDetailContextProvider product={product}>
          <VariantSelectContextProvider variants={variants}>
            <ProductDetailImage
              className={ProductDetailImageFixture.className}
              id={ProductDetailImageFixture.id}
              theme={ProductDetailImageFixture.theme}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
