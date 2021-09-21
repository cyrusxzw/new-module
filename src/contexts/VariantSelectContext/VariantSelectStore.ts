import { useEffect, useState } from 'react';
import find from 'lodash/find';
import type {
  UseVariantSelectStore,
  OnVariantChange,
} from './VariantSelectContext.types';

import type { Variant } from '~/types';

const useVariantSelectStore: UseVariantSelectStore = (
  variants = [],
  selectedVariantIndex,
) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    undefined,
  );

  useEffect(() => {
    setSelectedVariant(variants[selectedVariantIndex] ?? variants[0]);
  }, [variants, selectedVariantIndex]);

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
