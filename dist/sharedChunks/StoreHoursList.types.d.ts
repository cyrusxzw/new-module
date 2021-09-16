import { C as ComponentWithoutChildren } from './Component.types';
import { T as Themes } from './Themes.types';

declare type HoursListItem = {
    dayName?: string;
    hours?: string;
    id?: string;
    isAlternate?: boolean;
};
declare type StoreHoursListProps = {
    alternateHoursNote?: string;
    className?: string;
    heading?: string;
    hoursList?: HoursListItem[];
    theme?: Themes;
};
declare type StoreHoursListType = ComponentWithoutChildren<StoreHoursListProps>;

export { HoursListItem as H, StoreHoursListType as S };
