import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AddToCartContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { AccordionProductFixture } from './AccordionProduct.fixture.js';
import AccordionProduct from './AccordionProduct';

describe('<AccordionProduct />', () => {
  it('should be defined', () => {
    expect(AccordionProduct).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            openState={AccordionProductFixture.openState}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const accordionProduct = screen.getByTestId('data-testid-AccordionProduct');

    expect(accordionProduct).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should fire resetAccordion onClick if the accordion is compressed', () => {
    const handleOnClose = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isCompressed={true}
            openState={AccordionProductFixture.openState}
            resetAccordion={handleOnClose}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const accordionProduct = screen.getByTestId('data-testid-AccordionProduct');

    expect(handleOnClose).not.toHaveBeenCalled();

    userEvent.click(accordionProduct);

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
