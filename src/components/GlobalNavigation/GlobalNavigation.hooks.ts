/* eslint-disable max-lines-per-function */
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { isViewport } from '~/utils/viewport';
import { useWindowHasResized } from '~/customHooks';
import type { ActiveViewTypes, StickyNavType } from './GlobalNavigation.types';

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
  stickyNavRef: MutableRefObject<HTMLElement>,
  stickyNavProps: StickyNavType,
  setStickyNavProps: (stickyNavProps: StickyNavType) => void,
): void => {
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleLoad = () => {
      setStickyNavProps({ ...stickyNavProps, isLoaded: true });
    };
    const handleScroll = () => {
      const currentOffset = (stickyNavRef.current.offsetParent as HTMLElement)
        .offsetTop;

      if (currentOffset !== stickyNavProps.topOffset) {
        setStickyNavProps({ ...stickyNavProps, topOffset: currentOffset });
      }

      const NAV_HEIGHT = stickyNavRef.current.offsetHeight;
      const heightBeforeSticky = NAV_HEIGHT + stickyNavProps.topOffset;
      const currentScrollY = window.scrollY;

      if (
        currentScrollY <= stickyNavProps.topOffset &&
        stickyNavProps.isFixed
      ) {
        setStickyNavProps({
          ...stickyNavProps,
          isFixed: false,
          isHidden: false,
        });
      }
      if (currentScrollY > heightBeforeSticky) {
        if (currentScrollY < prevScrollY.current && stickyNavProps.isHidden) {
          setStickyNavProps({
            ...stickyNavProps,
            isFixed: true,
            isHidden: false,
          });
        } else if (
          currentScrollY > prevScrollY.current &&
          !stickyNavProps.isHidden
        ) {
          setStickyNavProps({
            ...stickyNavProps,
            isFixed: true,
            isHidden: true,
          });
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('load', handleLoad);

    if (stickyNavProps.isLoaded) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyNavProps]);
};

export { useActiveView, useStickyNav };
