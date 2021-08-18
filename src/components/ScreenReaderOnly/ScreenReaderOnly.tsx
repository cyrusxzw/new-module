import React from 'react';
import cx from 'classnames';
import type { ScreenReaderOnlyType } from './ScreenReaderOnly.types';
import styles from './ScreenReaderOnly.module.css';

const ScreenReaderOnly: ScreenReaderOnlyType = ({
  as: ElementType = 'span',
  children,
  className,
}) => {
  const classSet = cx(styles.base, className);

  return <ElementType className={classSet}>{children}</ElementType>;
};

export { ScreenReaderOnly };
