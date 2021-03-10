import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Loading.module.css';

const Loading = ({ className, isLoading, shouldFillSpace, size, theme }) => {
  if (!isLoading) return null;

  const classSet = cx(
    styles.base,
    {
      [styles.isLoading]: isLoading,
      [styles.fullSize]: shouldFillSpace,
    },
    styles[size],
    styles[theme],
    className,
  );

  return (
    <span className={classSet} data-testid="data-testid-loading">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </span>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  shouldFillSpace: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

Loading.defaultProps = {
  className: undefined,
  isLoading: undefined,
  shouldFillSpace: false,
  size: 'medium',
  theme: 'dark',
};

export { Loading };
