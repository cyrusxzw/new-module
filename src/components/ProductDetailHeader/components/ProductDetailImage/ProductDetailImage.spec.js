import React from 'react';
import { render } from '@testing-library/react';
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

  it('should render base component correctly', () => {
    const product = ProductDetailHeaderFixture.product;
    const variants = ProductDetailHeaderFixture.product.variantOptions;

    const { container } = render(
      <ProductDetailContextProvider product={product}>
        <VariantSelectContextProvider variants={variants}>
          <ProductDetailImage
            className={ProductDetailImageFixture.className}
            id={ProductDetailImageFixture.id}
            theme={ProductDetailImageFixture.theme}
          />
        </VariantSelectContextProvider>
      </ProductDetailContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
