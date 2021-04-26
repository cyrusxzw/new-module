import type { Options } from './GoogleMapsContext.types';
declare const useGoogleMapsStore: (
  apiKey: string,
  options?: Options,
) => {
  googleMap: any;
  isLoading: boolean;
};
export { useGoogleMapsStore };
