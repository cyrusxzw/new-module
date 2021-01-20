import React from 'react';
import { render } from '@testing-library/react';
import { NotificationContextProvider } from '~/contexts';
import { NewsletterSignup } from './NewsletterSignup';
import { NewsletterSignupFixture } from './NewsletterSignup.fixture';

describe('<NewsletterSignup />', () => {
  it('should be defined', () => {
    expect(NewsletterSignup).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <NotificationContextProvider>
        <NewsletterSignup
          consentErrorMsg={NewsletterSignupFixture.consentErrorMsg}
          errorMessage={NewsletterSignupFixture.errorMessage}
          showTermsConditionsTextBox={true}
          subscriptionMessage={NewsletterSignupFixture.subscriptionMessage}
          termsAndCondition={NewsletterSignupFixture.termsAndCondition}
          termsMessage={NewsletterSignupFixture.termsMessage}
          theme="light"
        />
      </NotificationContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
