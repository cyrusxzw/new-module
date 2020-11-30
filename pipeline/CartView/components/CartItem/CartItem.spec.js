import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { configure } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import CartItem from './CartItem';
import CartItemFixture from './CartItem.fixture';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import { useMutationUpdateCartEntry } from '~/customHooks/api/useMutationUpdateCartEntry';

jest.mock('~/customHooks/api/useMutationUpdateCartEntry');
jest.mock('~/lib/apollo/cache/onChangeCart');

describe('<CartItem />', () => {
  let copy;
  let locale;
  let mockFn;

  beforeEach(() => {
    copy = { remove: 'Remove' };
    locale = LocaleContextFixture;
    mockFn = jest.fn();

    useMutationUpdateCartEntry.mockImplementation(() => [mockFn, {}]);
  });

  it('should be defined', () => {
    expect(CartItem).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const { container } = render
      .create(
        <MockedProvider>
          <CartItem
            copy={copy}
            entryNumber={0}
            maxQuantity={5}
            name="Reverence Aromatique Hand Balm"
            price="$33.00"
            quantity={2}
            size="75 mL"
            url="/product/"
          />
        </MockedProvider>,
      )
      .toJSON();

    await act(async () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('when the quantity is changed', () => {
    it('should should invoke updateCartEntry with the new quantity', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartItem
              copy={copy}
              entryNumber={0}
              maxQuantity={5}
              name="Parsley Seed Anti-Oxidant Eye Cream"
              price="$625.00"
              quantity={2}
              size="10 mL"
              url="/au/p/skin/eyes-lips/parsley-seed-anti-oxidant-eye-cream/"
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const quantitySelect = component.root.findByProps({
          'data-test-ref': `CART_ENTRY_${0}_QUANTITY_SELECT`,
        });

        quantitySelect.props.onChange({ target: { value: '1' } });

        await waitForExpect(() => {
          expect(mockFn).toHaveBeenCalledWith(Number.parseInt('1', 10));
        });
      });
    });
  });

  describe('when the remove button is clicked', () => {
    it('should invoke updateCartEntry with quantity 0', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartItem
              copy={copy}
              entryNumber={0}
              maxQuantity={5}
              name="Parsley Seed Anti-Oxidant Eye Cream"
              price="$625.00"
              quantity={2}
              size="10 mL"
              url="/au/p/skin/eyes-lips/parsley-seed-anti-oxidant-eye-cream/"
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const removeButton = component.root.findByProps({
          'data-test-ref': `CART_ENTRY_${0}_REMOVE_BUTTON`,
        });

        removeButton.props.onClick();

        await waitForExpect(() => {
          expect(mockFn).toHaveBeenCalledWith(0);
        });
      });
    });
  });
});
