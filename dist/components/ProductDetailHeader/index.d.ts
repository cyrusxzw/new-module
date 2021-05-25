import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { V as Variant } from '../../sharedChunks/Variant.types';
import { a as BreadcrumbItem } from '../../sharedChunks/Breadcrumbs.types';

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
    theme?: Themes;
};

declare const ProductDetailHeader: ({ breadcrumbs, className, copy, onBreadcrumbClick, theme, }: ProductDetailHeaderProps) => ReactElement;

export { ProductDetailHeader };
