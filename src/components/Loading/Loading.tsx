import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { LoadingProps } from './Loading.types';
import styles from './Loading.module.css';

const Loading = forwardRef<HTMLDivElement, LoadingProps>(function LoadingRef({
  className,
  isLoading,
  shouldFillSpace = false,
  size = 'medium',
  theme,
}) {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!isLoading) return null;

  const classSet = cx(
    styles.base,
    {
      [styles.isLoading]: isLoading,
      [styles.fullSize]: shouldFillSpace,
    },
    styles[size],
    styles[currentTheme],
    className,
  );

  return (
    <span className={classSet} data-testid="data-testid-loading">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </span>
  );
});

export { Loading };
