import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { QuoteProps } from './Quote.types';
import styles from './Quote.module.css';

const Quote = forwardRef<HTMLDivElement, QuoteProps>(function QuoteRef(
  { author, className, content, theme },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <div className={classSet} ref={ref}>
      <div className={styles.wrapper}>
        <blockquote className={styles.blockquote}>{content}</blockquote>
        <cite className={styles.author}>{author}</cite>
      </div>
    </div>
  );
});

export { Quote };
