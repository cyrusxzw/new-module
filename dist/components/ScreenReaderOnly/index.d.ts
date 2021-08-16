/// <reference types="react" />
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type ScreenReaderOnlyProps = {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
};
declare type ScreenReaderOnlyType = ComponentWithChildren<ScreenReaderOnlyProps>;

declare const ScreenReaderOnly: ScreenReaderOnlyType;

export { ScreenReaderOnly };
