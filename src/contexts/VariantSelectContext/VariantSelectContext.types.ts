import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import type { ComponentWithChildren, Variant } from '~/types';

type OnVariantChange = (
  event: ChangeEvent<HTMLInputElement>,
  currentVariants: Variant[],
) => void;

type VariantSelectContextType = {
  onVariantChange: OnVariantChange;
  selectedVariant?: Variant;
  setSelectedVariant: Dispatch<SetStateAction<Variant>>;
  variants: Variant[];
};

type UseVariantSelectStore = (variants?: Variant[]) => VariantSelectContextType;

type VariantSelectContextProps = {
  variants: Variant[];
};

type VariantSelectContextProviderType = ComponentWithChildren<VariantSelectContextProps>;

export type {
  VariantSelectContextType,
  VariantSelectContextProviderType,
  UseVariantSelectStore,
  OnVariantChange,
};
