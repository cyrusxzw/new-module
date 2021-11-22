import React, { forwardRef } from 'react';
import cx from 'classnames';
import styles from './TextSection.module.css';
import type { TextSectionProps } from './TextSection.types';

const TextSection = forwardRef<HTMLDivElement, TextSectionProps>(
  function TextSectionRef({ text, theme = 'dark' }, ref) {
    return (
      <div className={cx(styles.base, styles[theme])}>
        <div ref={ref}>{text}</div>
      </div>
    );
  },
);

export { TextSection };
