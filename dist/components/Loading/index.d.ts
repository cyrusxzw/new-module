import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type Sizes = 'small' | 'medium' | 'large';
declare type LoadingProps = {
    className?: string;
    isLoading: boolean;
    shouldFillSpace?: boolean;
    size?: Sizes;
    theme?: Themes;
};

declare const Loading: FC<LoadingProps>;

export { Loading };
