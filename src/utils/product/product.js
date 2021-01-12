const getVariantRadioOptions = variants =>
  variants
    .filter(({ size, sku }) => size && sku)
    .map(({ size, sku }) => ({
      label: size,
      value: sku,
    }));

export { getVariantRadioOptions };
