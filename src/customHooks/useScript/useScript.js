import { useEffect, useState } from 'react';
import { isInBrowser } from '~/utils/environment';

const useScript = ({
  async = true,
  dataSet,
  defer = false,
  id,
  onLoad,
  shouldCheckForExisting = true,
  src,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    if (!isInBrowser()) return;

    if (shouldCheckForExisting) {
      const existing = document.querySelectorAll(`script[src="${src}"]`);
      if (existing.length > 0) {
        setIsLoading(false);
        return;
      }
    }

    const script = document.createElement('script');

    script.src = src;
    script.async = async;
    script.defer = defer;

    if (id) {
      script.id = id;
    }

    if (dataSet) {
      Object.keys(dataSet).forEach(attr => {
        script.dataset[attr] = dataSet[attr];
      });
    }

    const handleLoad = () => {
      setIsLoading(false);

      if (onLoad) {
        onLoad();
      }
    };

    const handleError = error => {
      setError(error);
      setIsLoading(false);
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return function cleanUp() {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return [isLoading, error];
};

export default useScript;
