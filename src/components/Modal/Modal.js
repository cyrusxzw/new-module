import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import { ModalBody } from './components/ModalBody';
import { Overlay } from '~/components/Overlay';
import { Transition } from '~/components/Transition';
import { isInBrowser } from '~/utils/environment';
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

const Modal = ({ children, className, copy, isVisible, onClose, theme }) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, styles[theme], className);

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

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  copy: PropTypes.shape({
    close: PropTypes.string,
  }),
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Modal.defaultProps = {
  children: undefined,
  className: undefined,
  copy: {
    close: undefined,
  },
  isVisible: undefined,
  onClose: undefined,
  theme: 'dark',
};

export { Modal };
