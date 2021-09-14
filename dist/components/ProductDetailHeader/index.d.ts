/// <reference types="react" />
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { V as Variant } from '../../sharedChunks/Variant.types';
import { a as BreadcrumbItem } from '../../sharedChunks/Breadcrumbs.types';
import 'react';

declare type ProductDetailBodyCopy = {
    addToCart?: {
        cartAction?: string;
        updateNotification?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
    };
    size?: {
        singular?: string;
        plural?: string;
    };
    upSellProductLabel?: string;
    flyinPanelHeading?: string;
};

declare type Breadcrumbs = {
    items?: BreadcrumbItem[];
    theme?: Themes;
};
declare type ProductDetailHeaderProps = {
    breadcrumbs?: Breadcrumbs;
    className?: string;
    copy?: ProductDetailBodyCopy;
    onBreadcrumbClick?: (item: BreadcrumbItem, selectedVariant: Variant) => void;
    onFlyinOpenCloseClick?: (flyinStatus: 'open' | 'close', selectedVariant: Variant) => void;
    onUpsellClick?: () => void;
    onUpsellScrollIntoView?: () => void;
    paymentWidget?: React.ReactNode;
    theme?: Themes;
};
declare type ProductDetailHeaderType = ComponentWithoutChildren<ProductDetailHeaderProps>;

declare const ProductDetailHeader: ProductDetailHeaderType;

export { ProductDetailHeader };
