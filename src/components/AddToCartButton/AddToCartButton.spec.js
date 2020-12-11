import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AddToCartContextProvider,
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { AddToCartButton } from './AddToCartButton';
import { AddToCartButtonFixture as fixture } from './AddToCartButton.fixture';
import { mockAddToCartButtonOnClick } from './__mocks__/AddToCartButton.onClick';

const AddToCartButtonWithProviders = ({ onClick, product, variants, copy }) => {
  return (
    <AddToCartContextProvider onClick={onClick}>
      <ProductDetailContextProvider product={product}>
        <VariantSelectContextProvider variants={variants}>
          <AddToCartButton copy={copy} />
        </VariantSelectContextProvider>
      </ProductDetailContextProvider>
    </AddToCartContextProvider>
  );
};

AddToCartButtonWithProviders.propTypes = {
  onClick: PropTypes.func,
  product: PropTypes.object,
  variants: PropTypes.array,
  copy: PropTypes.object,
};

describe('<AddToCartButton />', () => {
  const handleOnClick = jest.fn();
  const product = fixture.product;
  const variants = fixture.variants;
  const outOfStockVariant = fixture.outOfStockVariant;
  const alternateActionVariant = fixture.alternateActionVariant;
  const copy = fixture.copy;

  it('should be defined', () => {
    expect(AddToCartButton).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={mockAddToCartButtonOnClick}
        product={product}
        variants={variants}
      />,
    );

    const button = screen.getByRole('button', {
      name: `${fixture.copy.cartAction} — ${fixture.variants[0].price}`,
    });

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render out of stock button correctly', () => {
    render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={mockAddToCartButtonOnClick}
        product={product}
        variants={outOfStockVariant}
      />,
    );

    const button = screen.getByRole('button', {
      name: copy.outOfStock.title,
    });

    expect(button).toBeInTheDocument();
  });

  it('should render alternate action button correctly', () => {
    render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={mockAddToCartButtonOnClick}
        product={product}
        variants={alternateActionVariant}
      />,
    );

    const button = screen.getByRole('link', {
      name: alternateActionVariant[0].alternateAction.label,
    });

    expect(button).toBeInTheDocument();
  });

  it('should call on click callback successfully', () => {
    render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={handleOnClick}
        product={product}
        variants={variants}
      />,
    );

    const button = screen.getByRole('button', {
      name: `${fixture.copy.cartAction} — ${fixture.variants[0].price}`,
    });

    expect(button).toBeInTheDocument();
    expect(handleOnClick).toHaveBeenCalledTimes(0);

    userEvent.click(button);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });

  it('should should return null if there are no selected variants', () => {
    render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={handleOnClick}
        product={product}
        variants={[]}
      />,
    );

    const button = screen.queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });

  it('should show laoding html when clicked', async () => {
    render(
      <AddToCartButtonWithProviders
        copy={copy}
        onClick={mockAddToCartButtonOnClick}
        product={product}
        variants={variants}
      />,
    );

    const button = screen.getByRole('button', {
      name: `${fixture.copy.cartAction} — ${fixture.variants[0].price}`,
    });

    expect(button).toBeInTheDocument();

    let breadcrumbs = screen.queryByTestId('data-testid-loading');

    expect(breadcrumbs).not.toBeInTheDocument();

    userEvent.click(button);

    breadcrumbs = await screen.findByTestId('data-testid-loading');

    expect(breadcrumbs).toBeInTheDocument();
  });
});
