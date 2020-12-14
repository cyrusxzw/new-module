import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Icon from '~/components/Icon';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import styles from './FlyinPanel.module.css';

const FlyinPanel = ({
  children,
  className,
  heading,
  isVisible,
  onClose,
  theme,
}) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, styles[theme], className);
  const labelledby = uuidv4();
  const describedby = uuidv4();
  const asideRole = 'dialog';
  const closeButtonTitle = 'Close';

  return (
    <>
      <Overlay isVisible={isVisible} onClose={onClose} />
      <Transition
        hasCSSTransitionMountOnEnter={true}
        hasCSSTransitionUnmountOnExit={true}
        isActive={!!isVisible}
        type="slideRight"
      >
        <aside
          aria-describedby={describedby}
          aria-hidden={!isVisible}
          aria-labelledby={labelledby}
          className={classSet}
          role={asideRole}
        >
          <Button
            className={styles.closeButton}
            isInline={true}
            onClick={onClose}
            tabIndex={0}
            theme={theme}
            title={closeButtonTitle}
          >
            <Icon height={12} name="close" theme={theme} width={12} />
          </Button>
          {heading && (
            <Heading id={labelledby} level="2" size="small" theme={theme}>
              {heading}
            </Heading>
          )}
          <div className={styles.content} id={describedby}>{children}</div>
        </aside>
      </Transition>
    </>
  );
};

FlyinPanel.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FlyinPanel.defaultProps = {
  children: undefined,
  className: undefined,
  heading: undefined,
  isVisible: false,
  onClose: undefined,
  theme: 'dark',
};

export default FlyinPanel;
