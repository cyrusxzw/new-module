/// <reference types="react" />
import { FC } from 'react';
import { a as DefinitionListItem } from '../../sharedChunks/DefinitionList.types';
import { V as Variant } from '../../sharedChunks/Variant.types';
import '../../sharedChunks/Themes.types';

declare type UpSellProduct = {
    image?: {
        altText?: string;
        small?: string;
    };
    name?: string;
    url?: string;
};
declare type Product = {
    cartDisclaimer?: string;
    definitionList?: DefinitionListItem[];
    description?: string;
    flyinPanel?: React.ReactNode;
    id?: string;
    imageSize?: string;
    productName: string;
    sku: string;
    upSellProduct?: UpSellProduct;
    variantOptions?: Variant[];
};

declare type ProductDetailContextProps = {
    product?: Product;
};

declare const ProductDetailContextProvider: FC<ProductDetailContextProps>;
declare const useProductDetailContext: () => any;

export { ProductDetailContextProvider, useProductDetailContext };
