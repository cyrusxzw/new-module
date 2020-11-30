import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalProductDisplayAccordionFixture from './HorizontalProductDisplayAccordion.fixture';
import HorizontalProductDisplayAccordion from './HorizontalProductDisplayAccordion';

describe('<HorizontalProductDisplayAccordion />', () => {
  it('should be defined', () => {
    expect(HorizontalProductDisplayAccordion).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <HorizontalProductDisplayAccordion
          addToCartCopy={HorizontalProductDisplayAccordionFixture.addToCartCopy}
          products={HorizontalProductDisplayAccordionFixture.products}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
