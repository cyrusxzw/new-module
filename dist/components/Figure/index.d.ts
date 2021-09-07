import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type FigureProps = {
    caption?: string;
    className?: string;
    hasCaptionBorder?: boolean;
    hasCaptionOffset?: boolean;
    id?: string;
    theme?: string;
    foo?: boolean;
};
declare type FigureType = ComponentWithChildren<FigureProps>;

declare const Figure: FigureType;

export { Figure };
