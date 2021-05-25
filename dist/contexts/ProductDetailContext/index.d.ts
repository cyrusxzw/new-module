/// <reference types="react" />
import { FC } from 'react';
import { V as Variant } from '../../sharedChunks/Variant.types';

declare type Product = {
    description?: string;
    id?: string;
    variantOptions?: Variant[];
    cartDisclaimer?: string;
    definitionList?: {
        term?: JSX.Element;
        description?: JSX.Element;
    }[];
    flyinPanel?: JSX.Element;
    productName: string;
    imageSize?: string;
    upSellProduct?: {
        image?: {
            altText?: string;
            small?: string;
        };
        name?: string;
        url?: string;
    };
};

declare type ProductDetailContextProps = {
    product?: Product;
};

declare const ProductDetailContextProvider: FC<ProductDetailContextProps>;
declare const useProductDetailContext: () => any;

export { ProductDetailContextProvider, useProductDetailContext };
