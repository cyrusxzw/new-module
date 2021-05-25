/* istanbul ignore file */
const mockOnClick = async (LoadMoreDispatch, LOAD_MORE_ACTION_TYPES) => {
  LoadMoreDispatch({ type: LOAD_MORE_ACTION_TYPES.FETCHING });
  try {
    const result = await (() =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Load more successfully!`);
        }, 3000);
      }))();

    LoadMoreDispatch({ type: LOAD_MORE_ACTION_TYPES.SUCCESS });

    console.log('API result from LoadMore:', result); // eslint-disable-line no-console
  } catch (error) {
    LoadMoreDispatch({ type: LOAD_MORE_ACTION_TYPES.FAIL });

    console.error('API error from LoadMore:', error); // eslint-disable-line no-console
  }
};

export { mockOnClick };
