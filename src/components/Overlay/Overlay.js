import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './Overlay.module.css';

const Overlay = ({ className, isVisible, onClose }) => {
  useEscapeKeyListener(onClose);

  const classSet = cx(
    styles.base,
    {
      [styles.isVisible]: isVisible,
    },
    className,
  );

  return (
    <Transition
      isActive={!!isVisible}
      shouldMountOnEnter={true}
      shouldUnmountOnExit={true}
      type="fade"
    >
      <div
        aria-hidden="true"
        className={classSet}
        data-testid="data-testid-Overlay"
        onClick={onClose}
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
