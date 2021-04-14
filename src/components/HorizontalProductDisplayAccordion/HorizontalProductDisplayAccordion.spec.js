import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalProductDisplayAccordionFixture } from './HorizontalProductDisplayAccordion.fixture';
import { HorizontalProductDisplayAccordion } from './HorizontalProductDisplayAccordion';

describe('<HorizontalProductDisplayAccordion />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <HorizontalProductDisplayAccordion
        addToCartCopy={HorizontalProductDisplayAccordionFixture.addToCartCopy}
        products={HorizontalProductDisplayAccordionFixture.products}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.todo('Test onPromoClick');
});
