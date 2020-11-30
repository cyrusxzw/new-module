import React from 'react';
import { render } from '@testing-library/react';
import NewsLetterSignUp from './NewsLetterSignUp';
import NewsLetterSignUpFixture from './NewsLetterSignUp.fixture';

describe('<NewsLetterSignUp />', () => {
  it('should be defined', () => {
    expect(NewsLetterSignUp).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <NewsLetterSignUp
        consentErrorMsg={NewsLetterSignUpFixture.consentErrorMsg}
        errorMessage={NewsLetterSignUpFixture.errorMessage}
        showTermsConditionsTextBox={true}
        subscriptionMessage={NewsLetterSignUpFixture.subscriptionMessage}
        termsAndCondition={NewsLetterSignUpFixture.termsAndCondition}
        termsMessage={NewsLetterSignUpFixture.termsMessage}
        theme="light"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
