import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { HeadingType } from './Heading.types';
import styles from './Heading.module.css';

const Heading: HeadingType = ({
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
  const currentTheme = useThemeContext(theme, 'dark');

  if (!children) return null;

  const classSet = cx(
    styles.base,
    { [styles.flush]: isFlush },
    { [styles.serifFont]: hasSerifFont },
    { [styles.mediumWeightFont]: hasMediumWeightFont },
    styles[size],
    styles[currentTheme],
    className,
  );

  return React.createElement(
    `h${level}`,
    { className: classSet, id },
    children,
  );
};

export { Heading };
