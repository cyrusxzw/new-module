import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { KEYBOARD_CODES } from '~/constants';
import { useEscapeKeyListener } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './Overlay.module.css';

const Overlay = ({ className, isVisible = false, onClose }) => {
  useEscapeKeyListener(onClose);

  const classSet = cx(
    styles.base,
    {
      [styles.isVisible]: isVisible,
    },
    className,
  );

  const handleOnKeyPress = event => {
    if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
      onClose();
    }
  };

  return (
    <Transition
      hasCSSTransitionMountOnEnter={true}
      hasCSSTransitionUnmountOnExit={true}
      isActive={!!isVisible}
      type="fade"
    >
      <div
        className={classSet}
        onClick={onClose}
        onKeyPress={handleOnKeyPress}
        role="button"
        tabIndex={-1}
      />
    </Transition>
  );
};

Overlay.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Overlay.defaultProps = {
  className: undefined,
  isVisible: false,
  onClose: undefined,
};

export { Overlay };
