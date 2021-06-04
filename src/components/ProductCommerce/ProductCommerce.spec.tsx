import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { ProductCommerce } from './ProductCommerce';

const ProductCommerceWithProviders = () => (
  <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
    <ProductDetailContextProvider
      product={{ productName: 'productName', sku: 'sku' }}
    >
      <VariantSelectContextProvider
        variants={[
          {
            cartDisclaimer: 'variant 1 cartDisclaimer',
            size: 'variant 1 size',
            sku: 'variant 1 sku',
            price: 'variant 1 price',
            isInStock: true,
            image: {
              altText: 'variant 1 altText',
              sizes: {
                large: 'variant 1 large',
              },
            },
          },
          {
            cartDisclaimer: 'variant 2 cartDisclaimer ',
            size: 'variant 2 size',
            sku: 'variant 2 sku',
            price: 'variant 2 price',
            isInStock: true,
            image: {
              altText: 'variant 2 altText',
              sizes: {
                large: 'variant 2 large',
              },
            },
          },
        ]}
      >
        <ProductCommerce
          copy={{
            addToCart: {
              cartAction: 'cartAction',
              updateNotification: 'updateNotification',
              outOfStock: {
                label: 'outOfStock label',
                title: 'outOfStock title',
              },
            },
            size: 'size',
          }}
          description="description"
          eyebrow="eyebrow"
          heading="heading"
          size="size"
        />
      </VariantSelectContextProvider>
    </ProductDetailContextProvider>
  </AddToCartContextProvider>
);

describe('<ProductCommerce />', () => {
  it('should render UI given context props', () => {
    render(<ProductCommerceWithProviders />);

    expect(
      screen.getByRole('heading', { name: 'heading' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'eyebrow' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'size' })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'variant 1 size' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'variant 2 size' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'cartAction — variant 1 price' }),
    ).toBeInTheDocument();
  });

  it('should change the Add To Cart Button UI based on variant clicked', () => {
    render(<ProductCommerceWithProviders />);

    expect(
      screen.getByRole('button', { name: 'cartAction — variant 1 price' }),
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('radio', { name: 'variant 2 size' }));

    expect(
      screen.getByRole('button', { name: 'cartAction — variant 2 price' }),
    ).toBeInTheDocument();
  });
});
