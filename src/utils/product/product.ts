import type { Variant, RadioOptions } from './products.types';

const getVariantRadioOptions = (variants: Variant[]): RadioOptions[] =>
  variants
    .filter(({ size, sku }) => size && sku)
    .map(({ size, sku }) => ({
      label: size,
      value: sku,
    }));

export { getVariantRadioOptions };
