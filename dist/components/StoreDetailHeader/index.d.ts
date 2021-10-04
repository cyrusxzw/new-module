import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { H as HoursListItem } from '../../sharedChunks/StoreHoursList.types';
import 'react';

declare type StoreDetailCopy = {
    location?: string;
    email?: string;
    phone?: string;
    facialAppointments?: string;
    facialAppointmentsLink?: string;
    openingHours?: string;
};
declare type StoreDetailHeaderProps = {
    alternateHoursNote?: string;
    className?: string;
    copy?: StoreDetailCopy;
    facialAppointments?: boolean;
    facialAppointmentsLink?: string;
    email?: string;
    location?: string;
    openingHours?: HoursListItem[];
    phone?: string;
    storeName: string;
    theme?: Themes;
};
declare type StoreDetailHeaderType = ComponentWithoutChildren<StoreDetailHeaderProps>;

declare const StoreDetailHeader: StoreDetailHeaderType;

export { StoreDetailHeader };
