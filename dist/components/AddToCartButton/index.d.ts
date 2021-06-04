import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type AddToCartButtonProps = {
    className?: string;
    copy?: {
        cartAction?: string;
        postTaxPrice?: string;
        updateNotification?: string;
        outOfStock?: {
            label?: string;
            title?: string;
        };
    };
    dataTestRef: string;
    isEnabled?: boolean;
    isFullWidth?: boolean;
    theme?: Themes;
};

declare const AddToCartButton: FC<AddToCartButtonProps>;

export { AddToCartButton };
