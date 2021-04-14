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

    const accordionProduct = screen.getByTestId(
      /data-testid-AccordionProduct/i,
    );

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

    const closeStateBtn = container.querySelector('.closeBtn');

    userEvent.click(closeStateBtn);

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

    const openStateBtn = container.querySelector('.openBtn');

    userEvent.click(openStateBtn);

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

    const foregroundBtn = container.querySelector(
      '.closedStateForegroundImageWrap',
    );

    userEvent.click(foregroundBtn);

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

  it('should render closedState video', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedStateWithVideo}
            id={AccordionProductFixture.id}
            openState={AccordionProductFixture.openStateWithVideo}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const videos = container.querySelectorAll('.closedBackgroundVideo');

    expect(videos.length).toEqual(1);
    expect(videos[0]).toBeInTheDocument();
  });

  it('should render openState video', () => {
    const { container } = render(
      <AddToCartContextProvider onClick={mockAddToCartButtonOnClick}>
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            openState={AccordionProductFixture.openStateWithVideo}
            resetAccordion={() => undefined}
            toggleAccordion={() => undefined}
          />
        </VariantSelectContextProvider>
      </AddToCartContextProvider>,
    );

    const videos = container.querySelectorAll('.openBackgroundVideo');

    expect(videos.length).toEqual(1);
    expect(videos[0]).toBeInTheDocument();
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
    const closedStateDiv = container.querySelector(
      '.accordionDefaultBackground',
    );
    const openStateDiv = container.querySelector('.accordionExpanded');

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

    const openStateBtn = container.querySelector('.openBtn');

    userEvent.click(openStateBtn);

    expect(defaultOnPromoClickSpy).toHaveBeenCalledTimes(1);
  });
});
