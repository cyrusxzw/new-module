import { C as ComponentWithoutChildren } from './Component.types';
import { T as Themes } from './Themes.types';

declare type DateSelectorProps = {
    className?: string;
    copy?: {
        day?: string;
        month?: string;
        /** `['January', 'February', etc ]` */
        monthLabels?: string[];
        year?: string;
    };
    isEnabled?: boolean;
    /** Maximum number of years to show in the year dropdown */
    maxYears?: number;
    name?: string;
    onChange?: (date: string) => void;
    theme?: Themes;
    /** An ISO data, e.g. 2021-09-20 */
    value?: string;
};
declare type DateSelectorType = ComponentWithoutChildren<DateSelectorProps>;

export { DateSelectorType as D, DateSelectorProps as a };
