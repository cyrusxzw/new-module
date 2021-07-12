/// <reference types="react" />
import React$1 from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

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
    label?: string;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    theme?: Themes;
    value?: string;
};

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

export { Select };
