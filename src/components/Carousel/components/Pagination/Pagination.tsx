import React from 'react';
import cx from 'classnames';
import type { PaginationType } from './Pagination.types';
import styles from './Pagination.module.css';

const Pagination: PaginationType = ({
  dots = [],
  hasFlushPagination = false,
  progressIndex = 0,
  theme = 'dark',
}) => {
  if (!dots.length) return null;

  const dotsLength = dots.length;
  const width = `${100 / dotsLength}%`;
  const positionLeft = `${(100 / dotsLength) * progressIndex}%`;
  const listClassSet = cx(
    styles.list,
    { [styles.flush]: hasFlushPagination },
    styles[theme],
  );

  return (
    <div className={styles.base} data-testid="data-testid-Carousel-Pagination">
      <div className={listClassSet}>
        <div className={styles.bar} style={{ width, left: positionLeft }} />
      </div>
    </div>
  );
};

export { Pagination };
