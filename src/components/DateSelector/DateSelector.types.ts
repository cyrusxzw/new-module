import type { Themes, ComponentWithoutChildren } from '~/types';

type DateSelectorProps = {
  className?: string;
  copy?: {
    day?: string;
    month?: string;

    /** `['January', 'February', etc ]` */
    monthLabels?: string[];
    year?: string;
  };

  /** Maximum number of years to show in the year dropdown */
  maxYears?: number;
  name?: string;
  onChange?: (date: string) => void;
  theme?: Themes;

  /** An ISO data, e.g. 2021-09-20 */
  value?: string;
};

type DateSelectorType = ComponentWithoutChildren<DateSelectorProps>;

type DatePortion = 'day' | 'month' | 'year';

export type { DateSelectorType, DatePortion };
