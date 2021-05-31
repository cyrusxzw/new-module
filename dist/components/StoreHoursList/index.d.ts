import { ReactElement } from 'react';
import { S as StoreHoursListProps } from '../../sharedChunks/StoreHoursList.types';
import '../../sharedChunks/Themes.types';

declare const StoreHoursList: ({ alternateHoursNote, className, heading, hoursList, theme, }: StoreHoursListProps) => ReactElement | null;

export { StoreHoursList };
