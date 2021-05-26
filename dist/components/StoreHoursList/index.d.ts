import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

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

declare const StoreHoursList: ({ alternateHoursNote, className, heading, hoursList, theme, }: StoreHoursListProps) => ReactElement | null;

export { StoreHoursList };
