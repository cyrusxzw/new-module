import { useEffect, useState } from 'react';
import find from 'lodash/find';
import type { Variant } from '~/types';

const useVariantSelectStore = (variants = []) => {
  const [selectedVariant, setSelectedVariant] = useState({});

  useEffect(() => {
    setSelectedVariant(variants[0]);
  }, [variants]);

  const onVariantChange = (event, currentVariants: Variant[]) => {
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
