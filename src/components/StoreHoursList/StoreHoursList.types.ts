import type { ComponentWithoutChildren, Themes } from '~/types';

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

type StoreHoursListType = ComponentWithoutChildren<StoreHoursListProps>;

export type { StoreHoursListProps, StoreHoursListType, HoursListItem };
