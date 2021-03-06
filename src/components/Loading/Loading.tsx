import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { LoadingType } from './Loading.types';
import styles from './Loading.module.css';

const Loading: LoadingType = ({
  align = 'center',
  className,
  isLoading,
  screenReaderText,
  shouldFillSpace = false,
  size = 'medium',
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  const classSet = cx(
    styles.base,
    {
      [styles.isLoading]: isLoading,
      [styles.fullSize]: shouldFillSpace,
    },
    styles[align],
    styles[size],
    styles[currentTheme],
    className,
  );

  return (
    <span className={classSet} data-testid="data-testid-loading" role="status">
      {isLoading && (
        <>
          {screenReaderText && (
            <span className={styles.srOnly}>{screenReaderText}</span>
          )}
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </>
      )}
    </span>
  );
};

export { Loading };
