import React from 'react';
import renderer from 'react-test-renderer';
import NewsLetterSignUp from './NewsLetterSignUp';
import NewsLetterSignUpFixture from './NewsLetterSignUp.fixture';

describe('<NewsLetterSignUp />', () => {
  it('should be defined', () => {
    expect(NewsLetterSignUp).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <NewsLetterSignUp
          consentErrorMsg={NewsLetterSignUpFixture.consentErrorMsg}
          errorMessage={NewsLetterSignUpFixture.errorMessage}
          showTermsConditionsTextBox={true}
          subscriptionMessage={NewsLetterSignUpFixture.subscriptionMessage}
          termsAndCondition={NewsLetterSignUpFixture.termsAndCondition}
          termsMessage={NewsLetterSignUpFixture.termsMessage}
          theme="light"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
