/// <reference types="react" />
import type { Variant } from '~/types';
declare const useVariantSelectStore: (
  variants?: any[],
) => {
  onVariantChange: (event: any, currentVariants: Variant[]) => void;
  selectedVariant: {};
  setSelectedVariant: import('react').Dispatch<
    import('react').SetStateAction<{}>
  >;
  variants: any[];
};
export { useVariantSelectStore };
