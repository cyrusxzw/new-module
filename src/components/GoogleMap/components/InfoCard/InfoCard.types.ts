import type { ComponentWithoutChildren } from '~/types';

type InfoCardProps = {
  address?: string;
  className?: string;
  copy?: {
    directions?: string;
    openingHours?: {
      alternateHoursNote?: string;
      heading?: string;
    };
  };
  count?: number;
  hasMarkerIndexes?: boolean;
  openingHours?: {
    dayName?: string;
    hours?: string;
    id?: string;
    isAlternate?: boolean;
  }[];
  phoneNumber?: string;
  storeName?: string;
};

type InfoCardType = ComponentWithoutChildren<InfoCardProps>;

export type { InfoCardType };
