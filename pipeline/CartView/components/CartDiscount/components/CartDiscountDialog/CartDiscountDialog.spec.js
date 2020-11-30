import React from 'react';
import { render } from '@testing-library/react';
import CartDiscountDialog from './CartDiscountDialog';
import CartDiscountDialogFixture from './CartDiscountDialog.fixture';

const mockFn = jest.fn();

describe('<CartDiscountDialog />', () => {
  let copy;

  it('should be defined', () => {
    expect(CartDiscountDialog).toBeDefined();
  });

  beforeEach(() => {
    copy = CartDiscountDialogFixture.copy;
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <CartDiscountDialog
          copy={copy}
          handleClose={mockFn}
          isVisible={true}
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
