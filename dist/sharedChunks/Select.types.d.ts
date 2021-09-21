/// <reference types="react" />
import { T as Themes } from './Themes.types';

declare type SelectOption = {
    id?: string;
    label?: string;
    value?: string;
};
declare type SelectProps = {
    className?: string;
    dataTestRef?: string;
    errorMessage?: string;
    isBlock?: boolean;
    isEnabled?: boolean;
    label?: string;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    theme?: Themes;
    value?: string;
};

export { SelectProps as S };
