import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { LoadingType } from './Loading.types';
import styles from './Loading.module.css';

const Loading: LoadingType = ({
  className,
  isLoading,
  shouldFillSpace = false,
  size = 'medium',
  theme,
}) => {
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
    <span
      aria-busy={true}
      aria-live="polite"
      className={classSet}
      data-testid="data-testid-loading"
    >
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </span>
  );
};

export { Loading };
