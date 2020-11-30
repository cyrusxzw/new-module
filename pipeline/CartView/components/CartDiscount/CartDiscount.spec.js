import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import CartDiscount from './CartDiscount';
import CartDiscountFixture from './CartDiscount.fixture';

describe('<CartDiscount />', () => {
  let copy;
  let promotions;

  beforeEach(() => {
    copy = CartDiscountFixture.copy;
    promotions = [];
  });

  it('should be defined', () => {
    expect(CartDiscount).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(<CartDiscount copy={copy} promotions={promotions} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  describe('with promotions', () => {
    beforeEach(() => {
      promotions = CartDiscountFixture.promotions;
    });

    it('renders each promotion item correctly', () => {
      const component = renderer.create(
        <MockedProvider mocks={[]}>
          <CartDiscount copy={copy} promotions={promotions} />
        </MockedProvider>,
      );

      promotions.forEach(promotion => {
        const promotionItem = component.root.findByProps({
          'data-test-ref': `CART_PROMOTION_${promotion.code}`,
        });

        expect(promotionItem).toBeDefined();
      });
    });
  });
});
