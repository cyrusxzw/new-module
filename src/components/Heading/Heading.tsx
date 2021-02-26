import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import styles from './Heading.module.css';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  hasMediumWeightFont?: boolean;
  hasSerifFont?: boolean;
  id?: string;
  isFlush?: boolean;
  level: '1' | '2' | '3' | '4' | '5' | '6';
  size: 'xXSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  theme?: 'dark' | 'light';
}

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  className,
  hasMediumWeightFont = false,
  hasSerifFont = false,
  id,
  isFlush = false,
  level,
  size,
  theme = 'dark',
}) => {
  if (!children) return null;

  const classSet = cx(
    styles.base,
    { [styles.flush]: isFlush },
    { [styles.serifFont]: hasSerifFont },
    { [styles.mediumWeightFont]: hasMediumWeightFont },
    styles[size],
    styles[theme],
    className,
  );

  return React.createElement(
    `h${level}`,
    { className: classSet, id },
    children,
  );
};

export { Heading };
