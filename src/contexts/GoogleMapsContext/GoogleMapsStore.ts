import { useEffect, useState } from 'react';
import type { Options } from './GoogleMapsContext.types';

const loadGoogleMapsAsync = loader =>
  new Promise(resolve => {
    loader.load(google => {
      resolve(google);
    });
  });

const useGoogleMapsStore = (
  apiKey: string,
  options: Options = { libraries: ['places'] },
) => {
  const [googleMap, setGoogleMap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGoogleMap = async () => {
      const module = await import(/* webpackMode: "eager" */ 'google-maps');
      const Loader = module.default || module;

      setIsLoading(true);

      const { languageCode, libraries, regionCode } = options;

      Loader.KEY = apiKey;
      Loader.LIBRARIES = libraries;

      if (languageCode) {
        Loader.LANGUAGE = languageCode;
      }

      if (regionCode) {
        Loader.REGION = regionCode;
      }

      setGoogleMap(await loadGoogleMapsAsync(Loader));
      setIsLoading(false);
    };

    loadGoogleMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { googleMap, isLoading };
};

export { useGoogleMapsStore };
