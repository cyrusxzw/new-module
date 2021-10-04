import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import type { ActiveViewTypes, StickyNavType } from './GlobalNavigation.types';
import { stickyScrollHandler } from './GlobalNavigation.utils';
import debounce from 'lodash/debounce';

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

const useStickyNav = (
  stickyNavProps: StickyNavType,
  setStickyNavProps: (stickyNavProps: StickyNavType) => void,
): MutableRefObject<HTMLDivElement> => {
  const prevScrollY = useRef(0);
  const stickyNavRef = useRef(null);

  useEffect(() => {
    const handleDebouncedScrollListener = debounce(
      () => {
        stickyScrollHandler({
          stickyNavRef,
          stickyNavProps,
          setStickyNavProps,
          prevScrollY,
        });
      },
      100,
      { leading: true },
    );

    window.addEventListener('scroll', handleDebouncedScrollListener);

    return () => {
      window.removeEventListener('scroll', handleDebouncedScrollListener);
    };
  }, [stickyNavProps, setStickyNavProps]);

  return stickyNavRef;
};

export { useActiveView, useStickyNav };
