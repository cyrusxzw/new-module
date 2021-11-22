import { useEffect, useState } from 'react';
import { isViewport } from '~/utils/viewport';
import { ActiveViewTypes } from './FiftyFiftyFloatingText.types';
import { useWindowHasResized } from '~/customHooks';

const useActiveView = (): { activeView: ActiveViewTypes } => {
  const [activeView, setActiveView] = useState<ActiveViewTypes>('none');

  useWindowHasResized();

  const isMobile = isViewport('xs to sm only');
  const isTabletAndDesktop = isViewport('md');

  useEffect(() => {
    if (isMobile) {
      setActiveView('mobile');
    } else {
      setActiveView('tabletanddesktop');
    }
  }, [isMobile, isTabletAndDesktop]);

  return { activeView };
};

export { useActiveView };
