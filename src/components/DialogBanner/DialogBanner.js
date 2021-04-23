import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { P } from '~/components/Paragraph';
import { Overlay } from '~/components/Overlay';
import { Transition } from '~/components/Transition';
import styles from './DialogBanner.module.css';

const DialogBanner = ({
  className,
  copy,
  cta,
  hasCloseButton,
  heading,
  isVisible,
  message,
  onClose,
  position,
  theme,
}) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    styles[theme],
    styles[position],
    className,
  );

  return (
    <>
      <Overlay isVisible={isVisible} onClose={onClose} />
      <Transition
        isActive={isVisible}
        shouldMountOnEnter={true}
        shouldUnmountOnExit={true}
        type="slideDown"
      >
        <aside className={classSet}>
          <div className={styles.iconContainer}>
            <Icon
              className={styles.warningIcon}
              height={22}
              name="warning"
              theme="light"
              width={22}
            />
          </div>
          <div className={styles.contentContainer}>
            <Heading
              className={styles.heading}
              level="1"
              noTopMargin={true}
              size="large"
            >
              {heading}
            </Heading>
            <P className={styles.message}>{message}</P>
          </div>
          <div className={styles.closeContainer}>
            {hasCloseButton && (
              <Button
                className={styles.closeButton}
                isInline={true}
                onClick={onClose}
                title={copy.closeButtonTitle}
              >
                <Icon
                  className={styles.closeIcon}
                  height={12}
                  name="close"
                  theme="light"
                  width={12}
                />
              </Button>
            )}
            {cta && cta.text && (
              <Hyperlink
                className={styles.ctaButton}
                dataTestRef={cta.dataTestRef}
                id={cta.id}
                isInline={true}
                target={cta.openInANewWindow ? '_blank' : '_self'}
                theme={'light'}
                title={cta.title}
                url={cta.url}
              >
                {cta.text}
              </Hyperlink>
            )}
          </div>
        </aside>
      </Transition>
    </>
  );
};

DialogBanner.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
  }),
  cta: PropTypes.object,
  hasCloseButton: PropTypes.bool,
  isVisible: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']),
  theme: PropTypes.oneOf(['dark', 'black']),
  heading: PropTypes.string.isRequired,
};

DialogBanner.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close Dialog Banner',
  },
  cta: undefined,
  hasCloseButton: true,
  isVisible: false,
  message: undefined,
  onClose: undefined,
  position: 'top',
  theme: 'dark',
  heading: undefined,
};

export { DialogBanner };
