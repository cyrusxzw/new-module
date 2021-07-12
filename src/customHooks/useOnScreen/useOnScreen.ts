import { useEffect, useState } from 'react';
import { isInBrowser } from '~/utils/environment';
import type { UseOnScreen } from './useOnScreen.types';

const hasIntersectionObserver =
  isInBrowser() &&
  ('IntersectionObserver' in window ||
    'IntersectionObserverEntry' in window ||
    ('IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype));

const useOnScreen: UseOnScreen = (
  ref,
  threshold = 0,
  rootMargin = '0px',
  shouldNotifyOnLeavingScreen = false,
) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    let observer: IntersectionObserver = null;
    const currentRef = ref.current;

    if (!hasIntersectionObserver) {
      setIsOnScreen(true);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              shouldNotifyOnLeavingScreen ||
              (!shouldNotifyOnLeavingScreen && entry.isIntersecting)
            ) {
              setIsOnScreen(entry.isIntersecting);
            }
          });
        },
        {
          rootMargin,
          threshold,
        },
      );

      observer.observe(currentRef);
    }

    return function cleanup() {
      if (hasIntersectionObserver) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin, shouldNotifyOnLeavingScreen, threshold]);

  return isOnScreen;
};

export { useOnScreen };
