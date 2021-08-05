import React from 'react';
import cx from 'classnames';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { P } from '~/components/Paragraph';
import { Overlay } from '~/components/Overlay';
import { Transition } from '~/components/Transition';
import type { DialogBannerType } from './DialogBanner.types';
import styles from './DialogBanner.module.css';

const DialogBanner: DialogBannerType = ({
  className,
  copy,
  cta,
  hasCloseButton = true,
  isVisible = false,
  message,
  onClose,
  position = 'top',
  theme = 'dark',
  heading,
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
            <Heading className={styles.heading} level="1" size="large">
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
                title={copy?.closeButtonTitle ?? 'Close Dialog Banner'}
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
                hasTargetInNewWindow={cta.openInANewWindow}
                id={cta.id}
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

export { DialogBanner };
