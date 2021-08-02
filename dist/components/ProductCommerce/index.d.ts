/// <reference types="react" />
import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ProductCommerceProps = {
    className?: string;
    copy?: {
        addToCart?: {
            cartAction?: string;
            updateNotification?: string;
            outOfStock?: {
                label?: string;
                title?: string;
            };
        };
        size?: string;
    };
    cta?: {
        text?: string;
        url?: string;
    };
    description?: React.ReactNode;
    eyebrow?: string;
    heading?: string;
    id?: string;
    isActive?: boolean;
    onCtaClick?: () => void;
    size?: string;
    theme?: Themes;
};

declare const ProductCommerce: React__default.ForwardRefExoticComponent<ProductCommerceProps & React__default.RefAttributes<HTMLDivElement>>;

export { ProductCommerce };
