import { FC } from 'react';
import { V as Variant } from '../../sharedChunks/Variant.types';

declare type VariantSelectContextProps = {
    variants: Variant[];
};

declare const VariantSelectContextProvider: FC<VariantSelectContextProps>;
declare const useVariantSelectContext: () => any;

export { VariantSelectContextProvider, useVariantSelectContext };
