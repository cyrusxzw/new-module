import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import { getPortalRoot } from '~/utils/portal';
import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading/index.ts';
import { Icon } from '~/components/Icon';
import { Overlay } from '~/components/Overlay';
import { Transition } from '~/components/Transition';
import type { FlyinPanelProps } from './FlyinPanel.types';
import styles from './FlyinPanel.module.css';

const flyinRoot = getPortalRoot('aesop-gel-flyin-root');

const FlyinPanel = ({
  children,
  className,
  copy,
  heading,
  isVisible = false,
  onClose,
  theme,
}: FlyinPanelProps): ReactElement | null => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[theme], className);
  const asideRole = 'note';

  return (
    <>
      {createPortal(
        <>
          <Overlay isVisible={isVisible} onClose={onClose} />
          <Transition
            isActive={!!isVisible}
            shouldMountOnEnter={true}
            shouldUnmountOnExit={true}
            type="slideRight"
          >
            <aside
              aria-hidden={!isVisible}
              className={classSet}
              role={asideRole}
            >
              <Button
                className={styles.closeButton}
                isInline={true}
                onClick={onClose}
                tabIndex={0}
                theme={currentTheme}
                title={copy?.close}
              >
                <Icon
                  height={12}
                  name="close"
                  theme={currentTheme}
                  width={12}
                />
              </Button>
              <div className={styles.content}>
                {heading && (
                  <Heading
                    className={styles.heading}
                    hasMediumWeightFont={true}
                    level="3"
                    size="xXSmall"
                    theme={currentTheme}
                  >
                    {heading}
                  </Heading>
                )}
                {children}
              </div>
            </aside>
          </Transition>
        </>,
        flyinRoot,
      )}
    </>
  );
};

export { FlyinPanel };
