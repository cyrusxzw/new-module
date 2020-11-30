import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import CartDiscountForm from './CartDiscountForm';
import CartDiscountFormFixture from './CartDiscountForm.fixture';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import { useMutationCreateCartPromotion } from '~/customHooks/api/useMutationCreateCartPromotion';

const mockMutationFn = jest.fn();
const mockCompletedFn = jest.fn();

jest.mock('~/customHooks/api/useMutationCreateCartPromotion');

describe('<CartDiscountForm />', () => {
  let copy;
  let locale;

  beforeEach(() => {
    copy = CartDiscountFormFixture.copy;
    locale = LocaleContextFixture;

    useMutationCreateCartPromotion.mockImplementation(() => [
      mockMutationFn,
      {},
    ]);
  });

  it('should be defined', () => {
    expect(CartDiscountForm).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <MockedProvider>
          <CartDiscountForm copy={copy} onCompleted={mockCompletedFn} />
        </MockedProvider>,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  describe('when entering a promo code', () => {
    let component;

    beforeEach(() => {
      component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartDiscountForm copy={copy} onCompleted={mockCompletedFn} />
          </MockedProvider>
        </LocaleContext.Provider>,
      );
    });

    it('should enable the submit button', async () => {
      await act(async () => {
        const promoCode = component.root.findByProps({
          'data-test-ref': 'CART_DISCOUNT_FORM_PROMO_CODE',
        });

        promoCode.props.onChange({
          target: { name: 'promoCode', value: 'VALID_CODE' },
        });

        await waitForExpect(() => {
          const submitButton = component.root.findByProps({
            'data-test-ref': 'CART_DISCOUNT_FORM_SUBMIT_BUTTON',
          });

          expect(submitButton.props.disabled).toEqual(false);
        });
      });
    });
  });

  describe('when submitting form values', () => {
    let component;

    beforeEach(() => {
      useMutationCreateCartPromotion.mockImplementationOnce(() => [
        mockMutationFn,
        {},
      ]);

      component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartDiscountForm copy={copy} onCompleted={mockCompletedFn} />
          </MockedProvider>
        </LocaleContext.Provider>,
      );
    });

    it('should invoke the createCartPromotion mutation', async () => {
      await act(async () => {
        const promoCode = component.root.findByProps({
          'data-test-ref': 'CART_DISCOUNT_FORM_PROMO_CODE',
        });

        promoCode.props.onChange({
          target: { name: 'promoCode', value: 'VALID_CODE' },
        });

        await waitForExpect(() => {
          const submitButton = component.root.findByProps({
            'data-test-ref': 'CART_DISCOUNT_FORM_SUBMIT_BUTTON',
          });

          expect(submitButton.props.disabled).toEqual(false);
        });

        const form = component.root.findByProps({
          'data-test-ref': 'CART_DISCOUNT_FORM',
        });

        form.props.onSubmit({ preventDefault: jest.fn() });

        await waitForExpect(() => {
          expect(mockMutationFn).toHaveBeenCalled();
        });
      });
    });
  });

  describe('when the mutation is executing', () => {
    let component;

    beforeEach(() => {
      useMutationCreateCartPromotion.mockImplementationOnce(() => [
        mockMutationFn,
        { loading: true },
      ]);

      component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartDiscountForm copy={copy} onCompleted={mockCompletedFn} />
          </MockedProvider>
        </LocaleContext.Provider>,
      );
    });

    it('should render the loading indicator', async () => {
      await act(async () => {
        const promoCode = component.root.findByProps({
          'data-test-ref': 'CART_DISCOUNT_FORM_PROMO_CODE',
        });

        await waitForExpect(() => {
          const loadingIndicator = component.root.findByProps({
            'data-test-ref': 'CART_DISCOUNT_FORM_SUBMIT_BUTTON_LOADING',
          });

          expect(loadingIndicator).toBeDefined();
        });
      });
    });
  });
});
