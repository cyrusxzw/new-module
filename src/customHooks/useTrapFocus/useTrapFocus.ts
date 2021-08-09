import { useEffect, useRef } from 'react';
import { KEYBOARD_CODES } from '~/constants';

const defaultQuery = [
  'a[href]:not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[tabindex="0"]',
  '[contenteditable]',
].join(', ');

type UseTrapFocus = {
  <Type = any>(
    shouldTrap?: boolean,
    query?: string,
  ): React.MutableRefObject<Type>[];
};

const useTrapFocus: UseTrapFocus = (
  shouldTrap = false,
  query = defaultQuery,
) => {
  const ref = useRef(null);

  useEffect(() => {
    const refCurrent = ref?.current;

    const handleFocus = (event: KeyboardEvent) => {
      /** @TODO get focusableElements into state to update on UI change */
      const focusableElements = refCurrent.querySelectorAll(query);
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const isTabPressed =
        event.key === 'Tab' || event.keyCode === KEYBOARD_CODES.TAB;

      if (!isTabPressed) return;

      if (event.shiftKey) {
        /* handle shift + tab */
        if (document.activeElement === first) {
          last.focus();
          event.preventDefault();
        }
      } else {
        /* handle tab */
        if (document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    };

    if (refCurrent && shouldTrap) {
      refCurrent.addEventListener('keydown', handleFocus);
    }

    return function cleanup() {
      if (refCurrent) {
        refCurrent.removeEventListener('keydown', handleFocus);
      }
    };
  }, [shouldTrap, query]);

  return [ref];
};

export { useTrapFocus };
