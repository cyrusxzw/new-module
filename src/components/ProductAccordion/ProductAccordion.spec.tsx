import React from 'react';
import { render } from '@testing-library/react';
import { ProductAccordion } from './ProductAccordion';
import { ProductAccordionFixture } from './ProductAccordion.fixture';

describe('<ProductAccordion />', () => {
  it('should render base component correctly', () => {
    render(<ProductAccordion products={ProductAccordionFixture.products} />);
  });
});
