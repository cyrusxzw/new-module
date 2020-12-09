import React from 'react';
import { render } from '@testing-library/react';
import {
  AddToCartContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import { mockAddToCartButtonOnClick } from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import AccordionProductFixture from './AccordionProduct.fixture.js';
import AccordionProduct from './AccordionProduct';

describe('<AccordionProduct />', () => {
  it('should be defined', () => {
    expect(AccordionProduct).toBeDefined();
  });

  it('renders base component correctly', () => {
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

    expect(container).toMatchSnapshot();
  });
});
