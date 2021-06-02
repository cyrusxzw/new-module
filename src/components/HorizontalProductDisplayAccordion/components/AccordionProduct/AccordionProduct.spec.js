// TODO: refactor to address eslint rule violations
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AddToCartContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import { AccordionProductFixture } from './AccordionProduct.fixture.js';
import { AccordionProduct } from './AccordionProduct';

describe('<AccordionProduct />', () => {
  it('should render base component correctly', () => {
    render(
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

    const accordionProduct = screen.getByTestId(
      /data-testid-AccordionProduct/i,
    );

    expect(accordionProduct).toBeInTheDocument();
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

    const accordionProduct = screen.getByTestId(
      /data-testid-AccordionProduct/i,
    );

    userEvent.click(accordionProduct);

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });

  it('should fire resetAccordion on keydown press', () => {
    const handleResetOnKeydownPress = jest.fn();

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
            resetAccordion={handleResetOnKeydownPress}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const accordionProduct = screen.getByTestId(
      /data-testid-AccordionProduct/i,
    );

    fireEvent.keyDown(accordionProduct, {
      key: 'Escape',
      code: 27,
      charCode: 27,
    });

    expect(handleResetOnKeydownPress).toHaveBeenCalledTimes(1);
  });

  it('should fire toggleAccordion if the accordion is compressed', () => {
    const handleOpenOnClick = jest.fn();

    const { container } = render(
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
            resetAccordion={() => undefined}
            toggleAccordion={handleOpenOnClick}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const closeStateButton = container.querySelector('.closeButton');

    userEvent.click(closeStateButton);

    expect(handleOpenOnClick).toHaveBeenCalledTimes(1);
  });

  it('should fire onPromoClick and toggleAccordion if the accordion is uncompressed', () => {
    const handleCloseOnClick = jest.fn();

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isCompressed={true}
            onPromoClick={handleCloseOnClick}
            openState={AccordionProductFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={handleCloseOnClick}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const openStateButton = container.querySelector('.openButton');

    userEvent.click(openStateButton);

    expect(handleCloseOnClick).toHaveBeenCalledTimes(2);
  });

  it('should fire onPromoClick and toggleAccordion if the foreground image is clicked', () => {
    const handleForegroundOnClick = jest.fn();

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isCompressed={true}
            onPromoClick={handleForegroundOnClick}
            openState={AccordionProductFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={handleForegroundOnClick}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const foregroundButton = container.querySelector(
      '.closedStateForegroundImage',
    );

    userEvent.click(foregroundButton);

    expect(handleForegroundOnClick).toHaveBeenCalledTimes(2);
  });

  it('should execute callbackWithRef when initialized', () => {
    const handleCallbackWithRef = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            callbackWithRef={handleCallbackWithRef}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isCompressed={true}
            openState={AccordionProductFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    expect(handleCallbackWithRef).toHaveBeenCalledTimes(1);
  });

  it('should apply correct styles when isExpanded is true', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isExpanded={true}
            openState={AccordionProductFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const parentDiv = container.querySelector('.base');
    const closedStateDiv = container.querySelector('.background');
    const openStateDiv = container.querySelector('.expanded');

    expect(parentDiv).toHaveClass('isExpanded');
    // Note: toBeVisible() not working as expected, so instead asserting by class
    expect(closedStateDiv).toHaveClass('hidden');
    expect(openStateDiv).toHaveClass('open');
  });

  it('should run default onPromoClick function', () => {
    const defaultOnPromoClickSpy = jest.spyOn(
      AccordionProduct.defaultProps,
      'onPromoClick',
    );
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            isExpanded={true}
            openState={AccordionProductFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const openStateButton = container.querySelector('.openButton');

    userEvent.click(openStateButton);

    expect(defaultOnPromoClickSpy).toHaveBeenCalledTimes(1);
  });
});
