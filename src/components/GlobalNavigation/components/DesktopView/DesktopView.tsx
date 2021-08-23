import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { DesktopViewType } from './DesktopView.types';
import styles from './DesktopView.module.css';

const DesktopView: DesktopViewType = ({ children, className, theme }) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return <div className={classSet}>Desktop Navigation View</div>;
};

export { DesktopView };
