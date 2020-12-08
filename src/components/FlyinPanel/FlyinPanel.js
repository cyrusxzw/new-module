import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener, useOverflowHidden } from '~/customHooks';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Icon from '~/components/Icon';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import styles from './FlyinPanel.module.css';

/** Set up the Flyin component's anchor point for ReactDOM.createPortal */
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'aesop-gel-flyin-root');
document.body.appendChild(modalRoot);

const FlyinPanel = ({
  children,
  className,
  copy,
  heading,
  isVisible,
  onClose,
  theme,
}) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, styles[theme], className);
  const asideRole = 'note';

  return (
    <>
      {createPortal(
        <>
          <Overlay isVisible={isVisible} onClose={onClose} />
          <Transition
            hasCSSTransitionMountOnEnter={true}
            hasCSSTransitionUnmountOnExit={true}
            isActive={!!isVisible}
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
                theme={theme}
                title={copy.close}
              >
                <Icon height={12} name="close" theme={theme} width={12} />
              </Button>
              {heading && (
                <Heading level="2" size="small" theme={theme}>
                  {heading}
                </Heading>
              )}
              <div>{children}</div>
            </aside>
          </Transition>
        </>,
        modalRoot,
      )}
    </>
  );
};

FlyinPanel.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  copy: PropTypes.shape({
    close: PropTypes.string,
  }),
  heading: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FlyinPanel.defaultProps = {
  children: undefined,
  className: undefined,
  copy: {
    close: undefined,
  },
  heading: undefined,
  isVisible: false,
  onClose: undefined,
  theme: 'dark',
};

export default FlyinPanel;
