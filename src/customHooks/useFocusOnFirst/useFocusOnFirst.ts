import { useRef, useEffect } from 'react';

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

type UseFocusOnFirst = {
  <Type = any>(
    shouldUse?: boolean,
    query?: string,
  ): React.MutableRefObject<Type>[];
};

const useFocusOnFirst: UseFocusOnFirst = (
  shouldUse = true,
  query = defaultQuery,
) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current !== undefined && shouldUse) {
      ref.current.querySelectorAll(query)[0]?.focus();
    }
  }, [shouldUse, query]);

  return [ref];
};

export { useFocusOnFirst };
