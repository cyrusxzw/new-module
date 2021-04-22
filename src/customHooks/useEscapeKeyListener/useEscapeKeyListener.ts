import { useEffect } from 'react';
import { KEYBOARD_CODES } from '~/constants';
import type { UseEscapeKeyListener } from './useEscapeKeyListener.types';

const useEscapeKeyListener: UseEscapeKeyListener = onKeyPress => {
  useEffect(() => {
    const detectEscapeKey = (event: KeyboardEvent) => {
      if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
        onKeyPress(event);
      }

      return event;
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', detectEscapeKey, true);
    }

    return function cleanup() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', detectEscapeKey, true);
      }
    };
  }, [onKeyPress]);
};

export { useEscapeKeyListener };
