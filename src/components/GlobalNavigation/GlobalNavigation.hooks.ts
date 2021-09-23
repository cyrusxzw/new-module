import { useEffect, useState } from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import type { ActiveViewTypes } from './GlobalNavigation.types';

const useActiveView = (): { activeView: ActiveViewTypes } => {
  const [activeView, setActiveView] = useState<ActiveViewTypes>('none');

  useWindowHasResized();

  const isMobile = isViewport('xs to sm only');
  const isTablet = isViewport('md only');
  const isDesktop = isViewport('lg');

  useEffect(() => {
    if (isMobile) {
      setActiveView('mobile');
    } else if (isTablet) {
      setActiveView('tablet');
    } else if (isDesktop) {
      setActiveView('desktop');
    }
  }, [isMobile, isTablet, isDesktop]);

  return { activeView };
};

export { useActiveView };
