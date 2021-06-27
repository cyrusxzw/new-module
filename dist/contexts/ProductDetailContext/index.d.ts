/// <reference types="react" />
import { Dispatch, SetStateAction } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { a as DefinitionListItem } from '../../sharedChunks/DefinitionList.types';
import { V as Variant } from '../../sharedChunks/Variant.types';
import '../../sharedChunks/Themes.types';

declare type ProductDefinitionListItem = DefinitionListItem & {
    isExpandable?: boolean;
};
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
    definitionList?: ProductDefinitionListItem[];
    description?: string;
    flyinPanel?: React.ReactNode;
    id?: string;
    image?: {
        altText?: string;
        sizes?: {
            large?: string;
            medium?: string;
            small?: string;
        };
    };
    imageSize?: string;
    productName: string;
    sku: string;
    upSellProduct?: UpSellProduct;
    variantOptions?: Variant[];
};

declare type ProductDetailContextType = {
    productDetail: Product;
    setProductDetail: Dispatch<SetStateAction<Product>>;
};
declare type ProductDetailContextProps = {
    product?: Product;
};
declare type ProductDetailContextProviderType = ComponentWithChildren<ProductDetailContextProps>;

declare const ProductDetailContextProvider: ProductDetailContextProviderType;
declare const useProductDetailContext: () => ProductDetailContextType;

export { ProductDetailContextProvider, useProductDetailContext };
