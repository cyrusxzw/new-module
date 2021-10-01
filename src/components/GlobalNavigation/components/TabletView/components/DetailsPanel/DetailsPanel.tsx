import React from 'react';
import cx from 'classnames';
import { Transition } from '~/components/Transition';
import type { DetailsPanelType } from './DetailsPanel.types';
import styles from './DetailsPanel.module.css';

const DetailsPanel: DetailsPanelType = ({
  backgroundColor,
  children,
  hasOffset = false,
  isActive = true,
}) => {
  const classSet = cx(styles.base, {
    [styles.offset]: hasOffset,
    [styles.active]: isActive,
  });

  return (
    <Transition
      isActive={isActive}
      shouldMountOnEnter={true}
      shouldUnmountOnExit={true}
      type="fade"
    >
      <div className={classSet} style={{ backgroundColor }}>
        {children}
      </div>
    </Transition>
  );
};

export { DetailsPanel };
