import React from 'react';
import { useGlobalNavigationStateContext } from './GlobalNavigation.context';
import { DesktopView, MobileView, TabletView } from './components';
import type { GlobalNavigationType } from './GlobalNavigation.types';
import styles from './GlobalNavigation.module.css';

const GlobalNavigation: GlobalNavigationType = () => {
  const { activeView } = useGlobalNavigationStateContext();

  return (
    <div className={styles.base}>
      {activeView === 'mobile' && <MobileView />}
      {activeView === 'tablet' && <TabletView />}
      {activeView === 'desktop' && <DesktopView />}
    </div>
  );
};

export { GlobalNavigation };
