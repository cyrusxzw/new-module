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
import { ProductAccordionItemFixture } from './ProductAccordionItem.fixture';
import { ProductAccordionItem } from './ProductAccordionItem';

describe('<ProductAccordionItem />', () => {
  it('should render base component correctly', () => {
    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    expect(
      screen.getByTestId(/data-testid-ProductAccordionItem/i),
    ).toBeInTheDocument();
  });

  it('should fire resetAccordion onClick if the accordion is compressed', () => {
    const handleOnClose = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={handleOnClose}
            visualState="compressed"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    userEvent.click(screen.getByTestId(/data-testid-ProductAccordionItem/i));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });

  it('should fire resetAccordion on keydown press', () => {
    const handleResetOnKeydownPress = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={handleResetOnKeydownPress}
            toggleAccordion={() => undefined}
            visualState="compressed"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    fireEvent.keyDown(screen.getByTestId(/data-testid-ProductAccordionItem/i), {
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
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={handleOpenOnClick}
            visualState="compressed"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    userEvent.click(container.querySelector('.closeButton'));

    expect(handleOpenOnClick).toHaveBeenCalledTimes(1);
  });

  it('should fire onPromoClick and toggleAccordion if the accordion is uncompressed', () => {
    const handleCloseOnClick = jest.fn();

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            onPromoClick={handleCloseOnClick}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={handleCloseOnClick}
            visualState="expanded"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    userEvent.click(container.querySelector('.openButton'));

    expect(handleCloseOnClick).toHaveBeenCalledTimes(2);
  });

  it('should fire onPromoClick and toggleAccordion if the foreground image is clicked', () => {
    const handleForegroundOnClick = jest.fn();

    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            onPromoClick={handleForegroundOnClick}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={handleForegroundOnClick}
            visualState="compressed"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    userEvent.click(container.querySelector('.closedStateForegroundImage'));

    expect(handleForegroundOnClick).toHaveBeenCalledTimes(2);
  });

  it('should execute callbackWithRef when initialized', () => {
    const handleCallbackWithRef = jest.fn();

    render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            callbackWithRef={handleCallbackWithRef}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
            visualState="compressed"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    expect(handleCallbackWithRef).toHaveBeenCalledTimes(1);
  });

  it('should apply correct styles when visualState is expanded', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={ProductAccordionItemFixture.openState.product.variants}
        >
          <ProductAccordionItem
            addToCartCopy={ProductAccordionItemFixture.addToCartCopy}
            closedState={ProductAccordionItemFixture.closedState}
            id={ProductAccordionItemFixture.id}
            openState={ProductAccordionItemFixture.openState}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
            visualState="expanded"
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    // Note: toBeVisible() not working as expected, so instead asserting by class
    expect(container.querySelector('.background')).toHaveClass('hidden');
    expect(container.querySelector('.expanded')).toHaveClass('open');
  });
});
