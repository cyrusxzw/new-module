import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type StoreDetailProps = {
    className?: string;
    theme?: Themes;
};
declare type StoreDetailType = ComponentWithoutChildren<StoreDetailProps>;

declare const StoreDetail: StoreDetailType;

export { StoreDetail };
