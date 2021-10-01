import React from 'react';
import { useGlobalNavigationStateContext } from './GlobalNavigation.context';
import { DesktopView, MobileView, TabletView } from './components';
import type { GlobalNavigationType } from './GlobalNavigation.types';

const GlobalNavigation: GlobalNavigationType = () => {
  const { activeView } = useGlobalNavigationStateContext();

  return (
    <>
      {activeView === 'mobile' && <MobileView />}
      {activeView === 'tablet' && <TabletView />}
      {activeView === 'desktop' && <DesktopView />}
    </>
  );
};

export { GlobalNavigation };
