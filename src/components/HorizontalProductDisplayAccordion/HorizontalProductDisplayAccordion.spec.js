import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalProductDisplayAccordionFixture } from './HorizontalProductDisplayAccordion.fixture';
import { HorizontalProductDisplayAccordion } from './HorizontalProductDisplayAccordion';

describe('<HorizontalProductDisplayAccordion />', () => {
  it('should render base component correctly', () => {
    render(
      <HorizontalProductDisplayAccordion
        addToCartCopy={HorizontalProductDisplayAccordionFixture.addToCartCopy}
        products={HorizontalProductDisplayAccordionFixture.products}
      />,
    );

    // screen.debug();
  });

  it.todo('Test onPromoClick');
});
