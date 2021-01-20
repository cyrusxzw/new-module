import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterFixture } from './Footer.fixture';
import { NewsletterSignUpFixture } from '../NewsletterSignUp/NewsletterSignUp.fixture';
import { NotificationModalFixture } from '~/components/NotificationModal/NotificationModal.fixture';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Footer
        blocks={FooterFixture.blocks}
        consentErrorMsg={NewsletterSignUpFixture.consentErrorMsg}
        errorMessage={NewsletterSignUpFixture.errorMessage}
        notificationMessage={NotificationModalFixture.notificationMessage}
        showTermsConditionsTextBox={true}
        subscriptionMessage={NewsletterSignUpFixture.subscriptionMessage}
        termsAndCondition={NewsletterSignUpFixture.termsAndCondition}
        termsMessage={NewsletterSignUpFixture.termsMessage}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
