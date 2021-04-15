import React from 'react';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks';
import { Transition } from '~/components/Transition';
import type { OverlayProps } from './Overlay.types';
import styles from './Overlay.module.css';

const Overlay = ({ className, isVisible, onClose }: OverlayProps) => {
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
      hasCSSTransitionMountOnEnter={true}
      hasCSSTransitionUnmountOnExit={true}
      isActive={!!isVisible}
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

export { Overlay };
