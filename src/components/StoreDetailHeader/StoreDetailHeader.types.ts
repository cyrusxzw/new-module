import type { Themes } from '~/types';
import type { HoursListItem } from '~/components/StoreHoursList/StoreHoursList.types';

type StoreDetailCopy = {
  location?: string;
  email?: string;
  phone?: string;
  openingHours?: string;
};

type StoreDetailHeaderProps = {
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

export type { StoreDetailHeaderProps };
