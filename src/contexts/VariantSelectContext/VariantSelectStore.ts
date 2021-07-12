import { useEffect, useState } from 'react';
import find from 'lodash/find';
import queryString from 'query-string';
import type {
  UseVariantSelectStore,
  OnVariantChange,
} from './VariantSelectContext.types';

import type { Variant } from '~/types';

const useVariantSelectStore: UseVariantSelectStore = (variants = []) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    undefined,
  );

  useEffect(() => {
    const queryStringVariant = queryString.parse(location.search).variant;

    const variantFromQueryString = variants.find(
      (variant) => variant.sku === queryStringVariant,
    );

    setSelectedVariant(variantFromQueryString ?? variants[0]);
  }, [variants]);

  const onVariantChange: OnVariantChange = (event, currentVariants) => {
    event.persist();

    const {
      target: { value },
    } = event;

    const currentSelectedVariant =
      find(currentVariants, { sku: value }) || null;

    setSelectedVariant(currentSelectedVariant);
  };

  return {
    onVariantChange,
    selectedVariant,
    setSelectedVariant,
    variants,
  };
};

export { useVariantSelectStore };
