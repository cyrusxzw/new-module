import type { VFC } from 'react';
import type { Themes } from '~/types';

type PersonalInfoSummaryProps = {
  className?: string;
  theme?: Themes;
  prefixOptions?: { value: string; text: string }[];
  shouldShowPrefix?: boolean;
  shouldHaveNameSpace?: boolean;
  shouldSwapFullNameOrder?: boolean;
  userDetails?: {
    suffix?: string;
    prefix?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
  };
};

type PersonalInfoSummaryType = VFC<PersonalInfoSummaryProps>;

export type { PersonalInfoSummaryType };
