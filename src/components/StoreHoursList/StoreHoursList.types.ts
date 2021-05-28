import type { Themes } from '~/types';

type HoursListItem = {
  dayName?: string;
  hours?: string;
  id?: string;
  isAlternate?: boolean;
};

type StoreHoursListProps = {
  alternateHoursNote?: string;
  className?: string;
  heading?: string;
  hoursList?: HoursListItem[];
  theme?: Themes;
};

export type { StoreHoursListProps, HoursListItem };
