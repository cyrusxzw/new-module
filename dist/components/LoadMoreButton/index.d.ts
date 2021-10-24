import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type LoadMoreButtonProps = {
    className?: string;
    copy?: {
        actionLabel?: string;
    };
    dataTestRef: string;
    isEnabled?: boolean;
};
declare type LoadMoreButtonType = ComponentWithoutChildren<LoadMoreButtonProps>;

declare const LoadMoreButton: LoadMoreButtonType;

export { LoadMoreButton };
