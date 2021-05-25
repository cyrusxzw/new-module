import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type BynderWidgetProps = {
    className?: string;
    heading: string;
    id: string;
    theme?: Themes;
};

declare const BynderWidget: FC<BynderWidgetProps>;

export { BynderWidget };
