/// <reference types="react" />
import React$1 from 'react';
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

declare const ProductCommerce: React$1.ForwardRefExoticComponent<ProductCommerceProps & React$1.RefAttributes<HTMLDivElement>>;

export { ProductCommerce };
