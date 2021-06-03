import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { H as HoursListItem } from '../../sharedChunks/StoreHoursList.types';

declare type StoreDetailCopy = {
    location?: string;
    email?: string;
    phone?: string;
    openingHours?: string;
};
declare type StoreDetailHeaderProps = {
    alternateHoursNote?: string;
    className?: string;
    copy?: StoreDetailCopy;
    email?: string;
    location?: string;
    openingHours?: HoursListItem[];
    phone?: string;
    storeName: string;
    theme?: Themes;
};

declare const StoreDetailHeader: ({ alternateHoursNote, className, copy, email, location, openingHours, phone, storeName, theme, }: StoreDetailHeaderProps) => ReactElement;

export { StoreDetailHeader };
