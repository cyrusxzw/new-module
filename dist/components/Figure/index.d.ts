/// <reference types="react" />
import { FC } from 'react';

declare type FigureProps = {
    caption?: string;
    children?: React.ReactNode;
    className?: string;
    hasCaptionBorder?: boolean;
    hasCaptionOffset?: boolean;
    id?: string;
    theme?: string;
    foo?: boolean;
};

declare const Figure: FC<FigureProps>;

export { Figure };
