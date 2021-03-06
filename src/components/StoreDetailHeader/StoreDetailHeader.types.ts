import type { ComponentWithoutChildren, Themes } from '~/types';
import type { HoursListItem } from '~/components/StoreHoursList/StoreHoursList.types';

type StoreDetailCopy = {
  location?: string;
  email?: string;
  phone?: string;
  facialAppointments?: string;
  facialAppointmentsLink?: string;
  openingHours?: string;
  clickAndCollectSansSerif?: string;
};

type StoreDetailHeaderProps = {
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
  hasCnC?: boolean;
  storePageCallout?: string[];
  cncAvailable?: string[];
};

type StoreDetailHeaderType = ComponentWithoutChildren<StoreDetailHeaderProps>;

export type { StoreDetailHeaderProps, StoreDetailHeaderType };
