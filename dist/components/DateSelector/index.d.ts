import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type DateSelectorProps = {
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
declare type DateSelectorType = ComponentWithoutChildren<DateSelectorProps>;

declare const DateSelector: DateSelectorType;

export { DateSelector };
