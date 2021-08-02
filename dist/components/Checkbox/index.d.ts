import React__default, { ChangeEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type CheckboxProps = {
    checkboxClassName?: string;
    className?: string;
    content: string;
    contentClassName?: string;
    dataTestRef?: string;
    errorMessage?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    theme?: Themes;
};

declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

export { Checkbox };
