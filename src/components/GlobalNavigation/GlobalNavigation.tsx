import React from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import { DesktopView, MobileView, TabletView } from './components';
import { MobileViewContextProvider } from './components/MobileView/MobileView.context';
import { DesktopViewContextProvider } from './components/DesktopView/DesktopView.context';
import type { GlobalNavigationType } from './GlobalNavigation.types';

/** @TODO Tracking exand / collapse */

/** Add label to where closed + log current analytic push */

/** Hovering as a tracking push */

const GlobalNavigation: GlobalNavigationType = ({ className }) => {
  useWindowHasResized();

  const isMobile = isViewport('xs to sm only');
  const isTablet = isViewport('md only');
  const isDesktop = isViewport('lg');

  return (
    <div className={className}>
      {isMobile && (
        <MobileViewContextProvider>
          <MobileView />
        </MobileViewContextProvider>
      )}
      {isTablet && <TabletView />}
      {isDesktop && (
        <DesktopViewContextProvider>
          <DesktopView />
        </DesktopViewContextProvider>
      )}
    </div>
  );
};

export { GlobalNavigation };
