import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { ProductDetailHeaderFixture } from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import { AddToCartButtonFixture } from '~/components/AddToCartButton/AddToCartButton.fixture';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { ProductGridItem } from './ProductGridItem';
import { ProductGridItemFixture } from './ProductGridItem.fixture';

describe('<ProductGridItem />', () => {
  it('should render base component correctly', () => {
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

  it('should render with isBundle being true', () => {
    const bundleLinkName = "I'll give you an offer you can't refuse";
    const onCtaClickMock = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <ProductDetailContextProvider
          product={ProductDetailHeaderFixture.product}
        >
          <VariantSelectContextProvider variants={[]}>
            <ProductGridItem
              copy={{
                addToCart: AddToCartButtonFixture.copy,
                ...ProductGridItemFixture.copy,
              }}
              cta={{ text: bundleLinkName, url: 'corleone' }}
              info={ProductGridItemFixture.info}
              onCtaClick={onCtaClickMock}
              url={ProductGridItemFixture.url}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );
    const link = screen.getByRole('link', { name: bundleLinkName });
    userEvent.click(link);

    expect(onCtaClickMock).toHaveBeenCalledTimes(1);
  });

  it('should execute default props version of cta click correctly', () => {
    render(
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

    const link = screen.getAllByRole('link')[0]; // First Hyperlink with click function
    userEvent.click(link);
    // TODO: Assert default function situation
  });

  it('should execute cta click correctly', () => {
    const onCtaClickMock = jest.fn();
    render(
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
              onCtaClick={onCtaClickMock}
              url={ProductGridItemFixture.url}
            />
          </VariantSelectContextProvider>
        </ProductDetailContextProvider>
      </AddToCartContextProvider>,
    );

    const link = screen.getAllByRole('link')[0]; // First Hyperlink with click function
    userEvent.click(link);

    expect(onCtaClickMock).toHaveBeenCalledTimes(1);
  });
});
