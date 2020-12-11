/* istanbul ignore file */
const newsletterSignUpOnClick = async email => {
  try {
    await (() =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(email);
        }, 3000);
      }))();

    console.log('Result: ', email); // eslint-disable-line no-console
  } catch (error) {
    console.error('API error from SIgn up:', error); // eslint-disable-line no-console
  }
};

export { newsletterSignUpOnClick };
