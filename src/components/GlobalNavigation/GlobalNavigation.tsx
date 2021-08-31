import React from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import { DesktopView, MobileView, TabletView } from './components';

import type { GlobalNavigationType } from './GlobalNavigation.types';

/** @TODO Tracking exand / collapse */
/** Add label to where closed + log current analytic push */
/** Hovering as a tracking push */
/** is open callback */

const GlobalNavigation: GlobalNavigationType = ({ className }) => {
  useWindowHasResized();

  const isMobile = isViewport('xs to sm only');
  const isTablet = isViewport('md only');
  const isDesktop = isViewport('lg');

  return (
    <div className={className}>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
};

export { GlobalNavigation };
