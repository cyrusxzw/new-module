import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type BynderWidgetProps = {
    className?: string;
    heading: string;
    id: string;
    theme?: Themes;
};
declare type BynderWidgetType = ComponentWithoutChildren<BynderWidgetProps>;

declare const BynderWidget: BynderWidgetType;

export { BynderWidget };
