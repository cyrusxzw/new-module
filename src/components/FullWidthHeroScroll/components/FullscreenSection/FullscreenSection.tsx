import React, { useRef } from 'react';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './FullscreenSection.module.css';
import type { FullscreenSectionType } from './FullscreenSection.types';

const FullscreenSection: FullscreenSectionType = ({ text, theme = 'dark' }) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 1, '0% 0% -10% 0%');

  return (
    <div className={cx(styles.base, styles[theme])}>
      <Transition isActive={isOnScreen} type="slowFade">
        <div ref={ref}>{text}</div>
      </Transition>
    </div>
  );
};

export { FullscreenSection };
