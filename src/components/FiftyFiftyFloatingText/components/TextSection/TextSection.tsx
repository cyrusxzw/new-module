import React, { useRef } from 'react';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks';
import { Transition } from '~/components/Transition';
import styles from './TextSection.module.css';
import type { TextSectionType } from './TextSection.types';

const TextSection: TextSectionType = ({ text, theme = 'dark' }) => {
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

export { TextSection };
