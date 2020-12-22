import { useEffect } from 'react';
import { useOnScreen } from '~/customHooks/useOnScreen';

/**
 * A hook to execute a callback when the element enters the fold
 * @param {HTMLElement} ref a DOM reference to the element
 * @param {Function} callback a callback function to execute
 * @param {{threshold: Number, isExecutableOnReEntry: Boolean}} options hook behaviour options
 *
 *
 * @example
 * const ref = React.useRef(null);
 * const myFunction = () => console.log('Execute order 66');
 * const options = {threshold: 0.5, isExecutableOnReEntry: true};
 *
 * useExecuteOnImpression(ref, myFunction, options)
 */
const useExecuteOnImpression = (ref, callback, options = {}) => {
  const { threshold = 0.2, isExecutableOnReEntry = true } = options;
  const isOnScreen = useOnScreen(
    ref,
    threshold,
    undefined,
    isExecutableOnReEntry,
  );

  useEffect(() => {
    if (isOnScreen) {
      callback();
    }
  }, [callback, isOnScreen]);
};

export { useExecuteOnImpression };
