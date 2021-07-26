import React, { ChangeEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type TextInputV2Props = {
    autoComplete?: string;
    classNames?: {
        errorMessage?: string;
        input?: string;
        label?: string;
        wrapper?: string;
    };
    dataTestRef?: string;
    errorMessage?: string;
    id?: string;
    isEnabled?: boolean;
    label: string;
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    onChange?: (event: ChangeEvent) => void;
    pattern?: string;
    theme?: Themes;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
    value?: string;
};

declare const TextInputV2: React.ForwardRefExoticComponent<TextInputV2Props & React.RefAttributes<HTMLInputElement>>;

export { TextInputV2 };
