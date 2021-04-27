import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NotificationContextProvider } from '~/contexts';
import { NewsletterSignUp } from '~/compositions/NewsletterSignUp/index.ts';
import { FooterBlock } from '~/components/FooterBlock/index.ts';
import { Hidden } from '~/components/Hidden/index.ts';
import { IconLink } from '~/components/IconLink/index.ts';
import { NotificationModal } from '~/components/NotificationModal/index.ts';
import styles from './Footer.css';

const Footer = ({
  blocks,
  className,
  consentErrorMsg,
  iconLinks,
  errorMessage,
  notificationMessage,
  showTermsConditionsTextBox,
  subscriptionMessage,
  termsAndCondition,
  termsMessage,
  onClick,
}) => {
  const baseClassSet = cx(styles.base, className);

  return (
    <NotificationContextProvider>
      <div className={baseClassSet}>
        <NotificationModal
          backgroundColor="#d5d5cc"
          notificationMessage={notificationMessage}
        />
        <div className={styles.block}>
          <div className={styles.signup}>
            <NewsletterSignUp
              consentErrorMsg={consentErrorMsg}
              errorMessage={errorMessage}
              onClick={onClick}
              showTermsConditionsTextBox={showTermsConditionsTextBox}
              subscriptionMessage={subscriptionMessage}
              termsAndCondition={termsAndCondition}
              termsMessage={termsMessage}
              theme="light"
            />
          </div>
          {blocks?.length &&
            blocks.map((block, index) => (
              <FooterBlock
                className={styles.item}
                copy={block.copy}
                heading={block.heading}
                isVisibleOnTabletAndMobile={block.isVisibleOnTabletAndMobile}
                key={index}
                links={block.links}
                theme="light"
              />
            ))}
        </div>
        <div className={styles.bottom}>
          <span>&copy; Aesop</span>
          <Hidden isLarge={true} isXLarge={true}>
            <div>
              {iconLinks?.length &&
                iconLinks.map(icon => (
                  <IconLink
                    altText={icon.altText}
                    className={styles.iconLinks}
                    hasTargetInNewWindow={icon.hasTargetInNewWindow}
                    height={21}
                    icon={icon.icon}
                    id={icon.altText}
                    key={icon.id}
                    target={icon.target}
                    width={21}
                  />
                ))}
            </div>
          </Hidden>
        </div>
      </div>
    </NotificationContextProvider>
  );
};

Footer.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      copy: PropTypes.string,
      heading: PropTypes.string,
      isVisibleOnTabletAndMobile: PropTypes.bool,
      links: PropTypes.array,
    }),
  ),
  className: PropTypes.string,
  consentErrorMsg: PropTypes.string,
  iconLinks: PropTypes.array,
  errorMessage: PropTypes.string,
  notificationMessage: PropTypes.string,
  showTermsConditionsTextBox: PropTypes.bool,
  subscriptionMessage: PropTypes.string,
  termsAndCondition: PropTypes.string,
  termsMessage: PropTypes.string,
  onClick: PropTypes.func,
};

Footer.defaultProps = {
  blocks: undefined,
  className: undefined,
  consentErrorMsg: undefined,
  iconLinks: undefined,
  errorMessage: undefined,
  notificationMessage: undefined,
  showTermsConditionsTextBox: undefined,
  subscriptionMessage: undefined,
  termsAndCondition: undefined,
  termsMessage: undefined,
  onClick: undefined,
};

export { Footer };
