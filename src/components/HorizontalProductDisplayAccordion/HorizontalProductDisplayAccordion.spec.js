import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalProductDisplayAccordionFixture } from './HorizontalProductDisplayAccordion.fixture';
import { HorizontalProductDisplayAccordion } from './HorizontalProductDisplayAccordion';

describe('<HorizontalProductDisplayAccordion />', () => {
  it('should be defined', () => {
    expect(HorizontalProductDisplayAccordion).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <HorizontalProductDisplayAccordion
        addToCartCopy={HorizontalProductDisplayAccordionFixture.addToCartCopy}
        products={HorizontalProductDisplayAccordionFixture.products}
      />,
    );

    // TODO: Test onPromoClick
    expect(container).toMatchSnapshot();
  });
});
