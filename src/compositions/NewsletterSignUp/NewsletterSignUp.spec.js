import React from 'react';
import { render } from '@testing-library/react';
import { NotificationContextProvider } from '~/contexts';
import { NewsletterSignUp } from './NewsletterSignUp';
import { NewsletterSignUpFixture } from './NewsletterSignUp.fixture';

describe('<NewsletterSignUp />', () => {
  it('should be defined', () => {
    expect(NewsletterSignUp).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <NotificationContextProvider>
        <NewsletterSignUp
          consentErrorMsg={NewsletterSignUpFixture.consentErrorMsg}
          errorMessage={NewsletterSignUpFixture.errorMessage}
          showTermsConditionsTextBox={true}
          subscriptionMessage={NewsletterSignUpFixture.subscriptionMessage}
          termsAndCondition={NewsletterSignUpFixture.termsAndCondition}
          termsMessage={NewsletterSignUpFixture.termsMessage}
          theme="light"
        />
      </NotificationContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
