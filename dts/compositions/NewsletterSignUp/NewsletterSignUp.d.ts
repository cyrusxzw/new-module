export function NewsletterSignUp({
  className,
  consentErrorMsg,
  errorMessage,
  onClick,
  showTermsConditionsTextBox,
  termsAndCondition,
  termsMessage,
  theme,
  subscriptionMessage,
}: {
  className: any;
  consentErrorMsg: any;
  errorMessage: any;
  onClick: any;
  showTermsConditionsTextBox: any;
  termsAndCondition: any;
  termsMessage: any;
  theme: any;
  subscriptionMessage: any;
}): JSX.Element;
export namespace NewsletterSignUp {
  namespace propTypes {
    const className: PropTypes.Requireable<string>;
    const consentErrorMsg: PropTypes.Requireable<string>;
    const errorMessage: PropTypes.Requireable<string>;
    const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    const showTermsConditionsTextBox: PropTypes.Requireable<boolean>;
    const termsAndCondition: PropTypes.Requireable<string>;
    const termsMessage: PropTypes.Requireable<string>;
    const theme: PropTypes.Requireable<string>;
    const subscriptionMessage: PropTypes.Requireable<string>;
  }
  namespace defaultProps {
    const className_1: any;
    export { className_1 as className };
    const consentErrorMsg_1: any;
    export { consentErrorMsg_1 as consentErrorMsg };
    const errorMessage_1: string;
    export { errorMessage_1 as errorMessage };
    const onClick_1: any;
    export { onClick_1 as onClick };
    const showTermsConditionsTextBox_1: boolean;
    export { showTermsConditionsTextBox_1 as showTermsConditionsTextBox };
    const termsAndCondition_1: any;
    export { termsAndCondition_1 as termsAndCondition };
    const termsMessage_1: any;
    export { termsMessage_1 as termsMessage };
    const theme_1: string;
    export { theme_1 as theme };
    const subscriptionMessage_1: any;
    export { subscriptionMessage_1 as subscriptionMessage };
  }
}
import PropTypes from 'prop-types';
