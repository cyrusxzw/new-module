import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type LoadingSizes = 'small' | 'medium' | 'large';
declare type LoadingProps = {
    className?: string;
    isLoading: boolean;
    screenReaderText?: string;
    shouldFillSpace?: boolean;
    size?: LoadingSizes;
    theme?: Themes;
};
declare type LoadingType = ComponentWithoutChildren<LoadingProps>;

declare const Loading: LoadingType;

export { Loading };
