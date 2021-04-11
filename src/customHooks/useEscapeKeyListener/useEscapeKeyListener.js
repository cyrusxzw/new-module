import { useEffect } from 'react';
import { KEYBOARD_CODES } from '~/constants';

const useEscapeKeyListener = onKeyPress => {
  useEffect(() => {
    const detectEscapeKey = event => {
      if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
        onKeyPress(event);
      }

      return event;
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', detectEscapeKey, { capture: true });
    }

    return function cleanup() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', detectEscapeKey, {
          capture: true,
        });
      }
    };
  }, [onKeyPress]);
};

export { useEscapeKeyListener };
