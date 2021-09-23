import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { V as Variant } from '../../sharedChunks/Variant.types';

declare type OnVariantChange = (event: ChangeEvent<HTMLInputElement>, currentVariants: Variant[]) => void;
declare type VariantSelectContextType = {
    onVariantChange: OnVariantChange;
    selectedVariant?: Variant;
    setSelectedVariant: Dispatch<SetStateAction<Variant>>;
    variants: Variant[];
};
declare type VariantSelectContextProps = {
    variants: Variant[];
};
declare type VariantSelectContextProviderType = ComponentWithChildren<VariantSelectContextProps>;

declare const VariantSelectContextProvider: VariantSelectContextProviderType;
declare const useVariantSelectContext: () => VariantSelectContextType;

export { VariantSelectContextProvider, useVariantSelectContext };
