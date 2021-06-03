import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductAccordion } from './ProductAccordion';
import { ProductAccordionFixture } from './ProductAccordion.fixture';

describe('<ProductAccordion />', () => {
  it('should render two ProductAccordionItems correctly', () => {
    render(
      <ProductAccordion
        products={[
          ProductAccordionFixture.products[0],
          ProductAccordionFixture.products[1],
        ]}
      />,
    );

    expect(
      screen.getAllByTestId('data-testid-ProductAccordionItem'),
    ).toHaveLength(2);
  });
});
