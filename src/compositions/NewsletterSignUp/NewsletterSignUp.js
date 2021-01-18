import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useNotificationContext } from '~/contexts';
import { Icon } from '~/components/Icon';
import { Loading } from '~/components/Loading';
import { Checkbox } from '~/components/Checkbox';
import { TextInput } from '~/components/TextInput';
import styles from './NewsletterSignUp.css';

const NewsletterSignUp = ({
  className,
  consentErrorMsg,
  errorMessage,
  onClick,
  showTermsConditionsTextBox,
  termsAndCondition,
  termsMessage,
  theme,
  subscriptionMessage,
}) => {
  const [hasContent, setHasContent] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [hasAcceptedSubscription, setHasAcceptedSubscription] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  const inputFieldClassSet = cx(styles.inputField, styles[theme], className);
  const buttonClassSet = cx(
    styles.button,
    styles[theme],
    !!error && styles.hasError,
  );
  const signUpIconClassSet = cx(styles.signUpIcon, styles[theme]);
  const loadingClassSet = cx(styles.loading, styles[theme]);
  const subscriptionMessageClassSet = cx(
    styles.subscriptionMessage,
    styles[theme],
  );

  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch } = footerSuccessModal;

  const validate = value => {
    const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const string = String(value);
    if (!string) {
      return true;
    }

    const isValid = !!string.match(EMAIL_REGEXP);
    return isValid;
  };

  const onChange = e => {
    setEmail(e.target.value);
    setHasContent(e.target.value && e.target.value.trim() !== '');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(undefined);
    const isValid = validate(email);
    if (
      isValid &&
      !(
        showTermsConditionsTextBox &&
        (!hasAcceptedSubscription || !hasAcceptedTerms)
      )
    ) {
      setIsLoading(true);
      await onClick(email);
      setIsLoading(false);
      dispatch({ type: actionType });
    } else {
      let errorMsg = errorMessage;
      if (
        showTermsConditionsTextBox &&
        (!hasAcceptedSubscription || !hasAcceptedTerms)
      ) {
        errorMsg = consentErrorMsg;
      }
      setError(errorMsg);
    }
  };

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit}>
        <div className={inputFieldClassSet}>
          <div className={styles.footerNewsletterInputWrapper}>
            <TextInput
              data-test-ref="EMAIL_SIGN_UP_INPUT"
              hasContent={hasContent}
              hasError={!!error}
              id="newsletter-email"
              inputClassName={cx(styles.footerNewsletter)}
              isEnabled={!isLoading}
              label="Email Address"
              name="newsletter-email"
              onChange={onChange}
              theme={theme}
            />
          </div>
          <button
            className={buttonClassSet}
            data-test-ref="EMAIL_SIGN_UP_BUTTON"
            disabled={!!isLoading || !hasContent}
          >
            <Icon
              className={signUpIconClassSet}
              name="rightArrow"
              theme={theme}
            />
          </button>
          {!!isLoading && (
            <Loading
              className={loadingClassSet}
              isLoading={true}
              theme={theme}
            />
          )}
        </div>
        <div className={styles.footerNewsletterErrorMessage}>{error}</div>
        {showTermsConditionsTextBox ? (
          <section>
            <Checkbox
              content={subscriptionMessage}
              dataTestRef="EMAIL_SIGN_UP_SUBSCRIPTION_CHECKBOX"
              id="subscription"
              isEnabled={!isLoading}
              onChange={() =>
                setHasAcceptedSubscription(!hasAcceptedSubscription)
              }
              theme={theme}
            />
            <Checkbox
              content={termsMessage}
              dataTestRef="EMAIL_SIGN_UP_TERMS_AND_CONDITIONS_CHECKBOX"
              id="terms"
              isEnabled={!isLoading}
              onChange={() => setHasAcceptedTerms(!hasAcceptedTerms)}
              theme={theme}
            />
            <div className={styles.termsAndConditionWrapper}>
              <div className={styles.termsAndCondition}>
                {termsAndCondition}
              </div>
            </div>
          </section>
        ) : (
          <div className={subscriptionMessageClassSet}>
            {subscriptionMessage}
          </div>
        )}
      </form>
    </div>
  );
};

NewsletterSignUp.propTypes = {
  className: PropTypes.string,
  consentErrorMsg: PropTypes.string,
  errorMessage: PropTypes.string,
  onClick: PropTypes.func,
  showTermsConditionsTextBox: PropTypes.bool,
  termsAndCondition: PropTypes.string,
  termsMessage: PropTypes.string,
  theme: PropTypes.string,
  subscriptionMessage: PropTypes.string,
};

NewsletterSignUp.defaultProps = {
  className: undefined,
  consentErrorMsg: undefined,
  errorMessage: 'NEWSLETTER_SIGNUP',
  onClick: undefined,
  showTermsConditionsTextBox: false,
  termsAndCondition: undefined,
  termsMessage: undefined,
  theme: 'dark',
  subscriptionMessage: undefined,
};

export { NewsletterSignUp };
