import { useEffect, useState } from 'react';
import find from 'lodash/find';
import type { Variant } from '~/types';

function getQueryString(name) {
  const result =
    location && location.href.match(new RegExp(`[?&]${name}=([^&]+)`, 'i'));

  if (result == null || result.length < 1) return '';

  return decodeURIComponent(result[1]);
}

const useVariantSelectStore = (variants = []) => {
  const [selectedVariant, setSelectedVariant] = useState({});

  useEffect(() => {
    const queryStringVariant = getQueryString('variant');
    const variantFromQueryString = variants.find(
      variant => variant.sku === queryStringVariant,
    );
    setSelectedVariant(variantFromQueryString ?? variants[0]);
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
