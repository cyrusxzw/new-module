import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import FooterFixture from './Footer.fixture';
import NewsLetterSignUpFixture from '../NewsLetterSignUp/NewsLetterSignUp.fixture';
import NotificationModalFixture from '~/components/NotificationModal/NotificationModal.fixture';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Footer
        blocks={FooterFixture.blocks}
        consentErrorMsg={NewsLetterSignUpFixture.consentErrorMsg}
        errorMessage={NewsLetterSignUpFixture.errorMessage}
        notificationMessage={NotificationModalFixture.notificationMessage}
        showTermsConditionsTextBox={true}
        subscriptionMessage={NewsLetterSignUpFixture.subscriptionMessage}
        termsAndCondition={NewsLetterSignUpFixture.termsAndCondition}
        termsMessage={NewsLetterSignUpFixture.termsMessage}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
