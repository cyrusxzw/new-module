import React from 'react'; // imported because the html tag will be passed as props
const NewsletterSignUpFixture = {
  consentErrorMsg:
    'Please confirm your accept our Terms & Conditions before proceeding ',
  errorMessage: 'Please enter valid email address',
  termsAndCondition:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sem quis sem bibendum aliquet non nec sapien. Suspendisse felis dui, gravida non ligula id, tempor pharetra sapien. Vestibulum porttitor felis vitae mollis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sem quis sem bibendum aliquet non nec sapien. Suspendisse felis dui, gravida non ligula id, tempor pharetra sapien. Vestibulum porttitor felis vitae mollis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sem quis sem bibendum aliquet non nec sapien. Suspendisse felis dui, gravida non ligula id, tempor pharetra sapien. Vestibulum porttitor felis vitae mollis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sem quis sem bibendum aliquet non nec sapien. Suspendisse felis dui, gravida non ligula id, tempor pharetra sapien. Vestibulum porttitor felis vitae mollis porta.',
  termsMessage: 'I accept the Terms & Conditions ',
  subscriptionMessage: (
    <span>
      By subscribing, you agree to receive email marketing from Aesop about our
      products and services, and accept our{' '}
      <a href="https://www.aesop.com/au/r/privacy/">privacy policy</a>.
    </span>
  ),
};

export { NewsletterSignUpFixture };
