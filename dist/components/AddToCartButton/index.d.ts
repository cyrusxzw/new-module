import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type AddToCartButtonType = ComponentWithoutChildren<AddToCartButtonProps>;

declare const AddToCartButton: AddToCartButtonType;

export { AddToCartButton };
