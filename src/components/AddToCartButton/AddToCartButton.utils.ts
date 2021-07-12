import { useRef, useEffect, useState } from 'react';

const useDelayedDisabled = (
  shouldShowUpdateSuccessMessage: boolean,
): boolean => {
  const [isDelayedDisabled, setIsDelayedDisabled] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    if (shouldShowUpdateSuccessMessage) {
      setIsDelayedDisabled(true);

      timeout.current = setTimeout(() => {
        setIsDelayedDisabled(false);
      }, 2500);
    }

    return function cleanup() {
      clearTimeout(timeout.current);
    };
  }, [shouldShowUpdateSuccessMessage]);

  return isDelayedDisabled;
};

export { useDelayedDisabled };
