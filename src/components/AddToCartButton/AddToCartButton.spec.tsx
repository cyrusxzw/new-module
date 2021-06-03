import React from 'react';
import PropTypes from 'prop-types';
import { render, act, screen } from '@testing-library/react';
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
          <AddToCartButton copy={copy} dataTestRef="ADD_TO_CART" />
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
  copyJP: PropTypes.object,
};

describe('<AddToCartButton />', () => {
  const handleOnClick = jest.fn();
  const product = fixture.product;
  const variants = fixture.variants;
  const outOfStockVariant = fixture.outOfStockVariant;
  const alternateActionVariant = fixture.alternateActionVariant;
  const copy = fixture.copy;
  const copyJP = fixture.copyJP;

  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {
      return;
    });
  });

  afterAll(() => {
    (global.console.error as jest.Mock).mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
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

  it('should render add to cart button with text to indicate tax inclusion for jp region correctly', () => {
    const { container } = render(
      <AddToCartButtonWithProviders
        copy={copyJP}
        onClick={mockAddToCartButtonOnClick}
        product={product}
        variants={variants}
      />,
    );

    const button = screen.getByRole('button', {
      name: `${fixture.copyJP.cartAction} — ${fixture.copyJP.price}${' '}${
        fixture.copyJP.postTaxPrice
      }`,
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
    expect(handleOnClick).not.toHaveBeenCalled();

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

  it.todo('should show loading html when clicked');

  it('should have no active timers on unmount (should not throw state update error)', async () => {
    jest.useFakeTimers();

    const { unmount } = render(
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

    userEvent.click(button);

    const successMessage = await screen.findByText(/added to your cart/i);

    expect(successMessage).toBeInTheDocument();

    unmount();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(console.error).not.toHaveBeenCalled(); // eslint-disable-line no-console
  });
});
