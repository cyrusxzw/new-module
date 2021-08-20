import React from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import { DesktopView, MobileView, TabletView } from './components';
import { MobileViewContextProvider } from './components/MobileView/MobileView.context';
import type { GlobalNavigationType } from './GlobalNavigation.types';

const GlobalNavigation: GlobalNavigationType = ({ className }) => {
  useWindowHasResized();

  const isMobile = isViewport('xs to sm only');
  const isTablet = isViewport('md only');
  const isDesktop = isViewport('lg');

  // desktop Image
  // elevate items / different to

  return (
    <div className={className}>
      {isMobile && (
        <MobileViewContextProvider>
          <MobileView />
        </MobileViewContextProvider>
      )}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
};

export { GlobalNavigation };
