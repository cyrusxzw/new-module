import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterFixture } from './Footer.fixture';
import { NewsletterSignupFixture } from '../NewsletterSignup/NewsletterSignup.fixture';
import { NotificationModalFixture } from '~/components/NotificationModal/NotificationModal.fixture';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Footer
        blocks={FooterFixture.blocks}
        consentErrorMsg={NewsletterSignupFixture.consentErrorMsg}
        errorMessage={NewsletterSignupFixture.errorMessage}
        notificationMessage={NotificationModalFixture.notificationMessage}
        showTermsConditionsTextBox={true}
        subscriptionMessage={NewsletterSignupFixture.subscriptionMessage}
        termsAndCondition={NewsletterSignupFixture.termsAndCondition}
        termsMessage={NewsletterSignupFixture.termsMessage}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
