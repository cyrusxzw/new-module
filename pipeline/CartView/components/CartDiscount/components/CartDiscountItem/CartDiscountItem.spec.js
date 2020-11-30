import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import CartDiscountItem from './CartDiscountItem';
import CartDiscountItemFixture from './CartDiscountItem.fixture';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import { useMutationDeleteCartPromotion } from '~/customHooks/api/useMutationDeleteCartPromotion';

jest.mock('~/customHooks/api/useMutationDeleteCartPromotion');

describe('<CartDiscountItem />', () => {
  let data;
  let locale;
  let mockFn;

  beforeEach(() => {
    locale = LocaleContextFixture;
    mockFn = jest.fn();
    useMutationDeleteCartPromotion.mockImplementation(() => [mockFn, {}]);
  });

  it('should be defined', () => {
    expect(CartDiscountItem).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartDiscountItem
              copy={CartDiscountItemFixture.copy}
              promotion={CartDiscountItemFixture.promotion}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  describe('when the remove button is clicked', () => {
    it('should invoke the deleteCartPromotion mutation', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartDiscountItem
              copy={CartDiscountItemFixture.copy}
              promotion={CartDiscountItemFixture.promotion}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const removeButton = component.root.findByProps({
          'data-test-ref': `CART_PROMOTION_${CartDiscountItemFixture.promotion.code}_REMOVE_BUTTON`,
        });

        removeButton.props.onClick();

        await waitForExpect(() => {
          expect(useMutationDeleteCartPromotion).toHaveBeenCalled();
        });
      });
    });
  });
});
