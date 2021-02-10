import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { isInBrowser } from '~/utils/environment';

const useWindowHasResized = callback => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        height: isInBrowser() ? window.innerHeight : 0,
        width: isInBrowser() ? window.innerWidth : 0,
      });

      if (callback) callback();
    }, 200);

    if (isInBrowser()) {
      window.addEventListener('resize', handleResize);
    }

    return function cleanUp() {
      if (isInBrowser()) {
        window.removeEventListener('resize', handleResize);
      }
    };
  });

  return windowSize;
};

export { useWindowHasResized };
