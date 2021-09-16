import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { MenuItemType } from './MenuItem.types';
import styles from './MenuItem.module.css';

const MenuItem: MenuItemType = ({ children, isActive = false }) => {
  const currentTheme = useThemeContext(undefined, 'dark');

  const classSet = cx(styles.base, styles[currentTheme], {
    [styles.active]: isActive,
  });

  return <li className={classSet}>{children}</li>;
};

export { MenuItem };
