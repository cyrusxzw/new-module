import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { ComponentBoilerplateType } from './ComponentBoilerplate.types';
import styles from './ComponentBoilerplate.module.css';

const ComponentBoilerplate: ComponentBoilerplateType = ({
  ComponentChildrenPropBoilerplate
  className,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return ComponentUIBoilerplate;
};

export { ComponentBoilerplate };
