import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import { isInBrowser } from '~/utils/environment';
import { ModalBody } from './components/ModalBody';
import { Overlay } from '~/components/Overlay';
import { Transition } from '~/components/Transition';
import type { ModalProps } from './Modal.types';
import styles from './Modal.module.css';

let modalRoot = null;
if (isInBrowser()) {
  /** Set up the Modal component's anchor point for ReactDOM.createPortal */
  modalRoot = document.getElementById('aesop-gel-modal-root');

  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'aesop-gel-modal-root');
    document.body.appendChild(modalRoot);
  }
}

const Modal: FC<ModalProps> = ({
  children,
  className,
  copy,
  isVisible,
  onClose,
  theme,
}) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <>
      {createPortal(
        <>
          <Overlay isVisible={isVisible} onClose={onClose} />
          <Transition
            hasCSSTransitionMountOnEnter={true}
            hasCSSTransitionUnmountOnExit={true}
            isActive={isVisible}
            type="zoom"
          >
            <aside
              aria-hidden={!isVisible}
              aria-modal="true"
              className={classSet}
              data-testid="data-testid-Modal"
              role="dialog"
            >
              <div className={styles.inner}>
                <ModalBody
                  copy={copy}
                  isVisible={isVisible}
                  onClose={onClose}
                  theme={theme}
                >
                  {children}
                </ModalBody>
              </div>
            </aside>
          </Transition>
        </>,
        modalRoot,
      )}
    </>
  );
};

export { Modal };
