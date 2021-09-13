import { VFC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type PersonalInfoSummaryProps = {
    className?: string;
    theme?: Themes;
    prefixOptions?: {
        value: string;
        text: string;
    }[];
    shouldShowPrefix?: boolean;
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
declare type PersonalInfoSummaryType = VFC<PersonalInfoSummaryProps>;

declare const PersonalInfoSummary: PersonalInfoSummaryType;

export { PersonalInfoSummary };
