/// <reference types="react" />
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type HiddenProps = {
    children: React.ReactNode;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
    isXLarge?: boolean;
};
declare type HiddenType = ComponentWithChildren<HiddenProps>;

declare const Hidden: HiddenType;

export { Hidden };
