/* istanbul ignore file */
import type { OnAddToCartClick } from '~/contexts/AddToCartContext/AddToCartContext.types';

const mockAddToCartButtonOnClick: OnAddToCartClick = async (
  sku,
  addToCartDispatch,
) => {
  addToCartDispatch({ type: 'fetching' });

  try {
    await (() =>
      new Promise((resolve, reject) => {
        setTimeout(
          () =>
            sku
              ? resolve(`${sku} was successfully added to the cart.`)
              : reject('fail'),
          1000,
        );
      }))();

    addToCartDispatch({ type: 'success' });
  } catch (error) {
    addToCartDispatch({ type: 'fail', payload: error });
  }
};

export { mockAddToCartButtonOnClick };
