import React from 'react';
import { VariantSelectContextProvider } from '~/contexts';
import { render } from '@testing-library/react';
import AccordionProductFixture from './AccordionProduct.fixture.js';
import AccordionProduct from './AccordionProduct';

describe('<AccordionProduct />', () => {
  it('should be defined', () => {
    expect(AccordionProduct).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <VariantSelectContextProvider
        variants={AccordionProductFixture.openState.product.variants}
      >
        <AccordionProduct
          addToCart={AccordionProductFixture.addToCart}
          closedState={AccordionProductFixture.closedState}
          id={AccordionProductFixture.id}
          openState={AccordionProductFixture.openState}
        />
      </VariantSelectContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
