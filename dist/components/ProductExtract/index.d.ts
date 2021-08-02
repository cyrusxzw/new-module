import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';

declare type ProductExtractProps = {
    dataTestRef: string;
    className?: string;
    hasBottomBorder?: boolean;
    hasTopMargin?: boolean;
    imageSize?: 'small' | 'medium';
    isVisible?: boolean;
    itemNum?: number;
    theme?: Themes;
    onHyperlinkClick?: () => void;
    product?: {
        image?: ImageProps;
        name?: string;
        url?: string;
    };
    works?: string;
};

declare const ProductExtract: React__default.ForwardRefExoticComponent<ProductExtractProps & React__default.RefAttributes<HTMLDivElement>>;

export { ProductExtract };
