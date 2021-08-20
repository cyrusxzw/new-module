import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { TabletViewType } from './TabletView.types';
import styles from './TabletView.module.css';

const TabletView: TabletViewType = ({ className, theme }) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return <div className={classSet}>Tablet Navigation View</div>;
};

export { TabletView };
