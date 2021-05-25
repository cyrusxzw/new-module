/// <reference types="react" />
import { ReactElement } from 'react';

declare type HiddenProps = {
    children: React.ReactNode;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
    isXLarge?: boolean;
};

declare const Hidden: ({ children, isLarge, isMedium, isSmall, isXLarge, }: HiddenProps) => ReactElement | null;

export { Hidden };
