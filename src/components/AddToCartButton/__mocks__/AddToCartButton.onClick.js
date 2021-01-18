/* istanbul ignore file */
const mockAddToCartButtonOnClick = async (
  sku,
  addToCartDispatch,
  ADD_TO_CART_ACTION_TYPES,
) => {
  addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FETCHING });

  try {
    const result = await (() =>
      new Promise((resolve, reject) => {
        setTimeout(
          () =>
            sku
              ? resolve(`${sku} was successfully added to the cart.`)
              : reject('fail'),
          3000,
        );
      }))();

    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.SUCCESS });

    console.log('API result from AddToCart:', result); // eslint-disable-line no-console
  } catch (error) {
    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FAIL });

    console.error('API error from AddToCart:', error); // eslint-disable-line no-console
  }
};

export { mockAddToCartButtonOnClick };
