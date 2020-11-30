import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import CartViewFixture from '~/components/CartView/CartView.fixture';
import CartCheckout from './CartCheckout';
import CartCheckoutFixture from './CartCheckout.fixture';

configure({ adapter: new Adapter() });

describe('<CartCheckout />', () => {
  it('should be defined', () => {
    expect(CartCheckout).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <CartCheckout
          copy={CartCheckoutFixture.copy}
          subTotalPrice={CartViewFixture.subTotalPrice}
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
