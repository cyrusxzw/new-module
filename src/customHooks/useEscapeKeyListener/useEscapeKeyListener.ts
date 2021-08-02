import { useEffect } from 'react';
import { KEYBOARD_CODES } from '~/constants';
import type { UseEscapeKeyListener } from './useEscapeKeyListener.types';

const useEscapeKeyListener: UseEscapeKeyListener = (
  onKeyPress,
  shouldRunCallback = true,
) => {
  useEffect(() => {
    const detectEscapeKey = (event: KeyboardEvent) => {
      const isEscapeKey =
        event.key === 'Esc' || event.keyCode === KEYBOARD_CODES.ESCAPE;
      if (isEscapeKey && shouldRunCallback) {
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
