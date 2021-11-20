import React, { forwardRef, useRef } from 'react';
import cx from 'classnames';
import { Transition } from '~/components/Transition';
import styles from './TextSection.module.css';
import type { TextSectionProps } from './TextSection.types';

const TextSection = forwardRef<HTMLDivElement, TextSectionProps>(
  function TextSectionRef({ text, theme = 'dark' }, ref) {
    const myRef = useRef(null);

    return (
      <div className={cx(styles.base, styles[theme])} ref={myRef}>
        <Transition isActive={true} type="slowFade">
          <div ref={ref}>{text}</div>
        </Transition>
      </div>
    );
  },
);

export { TextSection };
