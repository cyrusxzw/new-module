/* istanbul ignore file */
const mockAddToCartButtonOnClick = async (
  sku,
  addToCartDispatch,
  ADD_TO_CART_ACTION_TYPES,
) => {
  addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FETCHING });

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

    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.SUCCESS });
  } catch (error) {
    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FAIL });
  }
};

export { mockAddToCartButtonOnClick };
