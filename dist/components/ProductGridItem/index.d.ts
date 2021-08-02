import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type Copy = {
    addToCart?: {
        cartAction?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
        updateNotification?: string;
    };
};
declare type CallToAction = {
    clickFunction?: () => void;
    text?: string;
    url?: string;
};
declare type ProductGridItemProps = {
    className?: string;
    copy?: Copy;
    cta?: CallToAction;
    id?: string;
    info?: string;
    onCtaClick?: () => void;
    theme?: Themes;
    url?: string;
};

declare const ProductGridItem: React__default.ForwardRefExoticComponent<ProductGridItemProps & React__default.RefAttributes<HTMLDivElement>>;

export { ProductGridItem };
