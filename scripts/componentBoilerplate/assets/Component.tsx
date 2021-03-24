import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { ComponentBoilerplateProps } from './ComponentBoilerplate.types';
import styles from './ComponentBoilerplate.module.css';

const ComponentBoilerplate = forwardRef<
  HTMLDivElement,
  ComponentBoilerplateProps
>(function ComponentBoilerplateRef({ children, className, theme }) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return <div className={classSet}>{children}</div>;
});

export { ComponentBoilerplate };
