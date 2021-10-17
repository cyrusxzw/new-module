import { Ref, FocusEvent, ChangeEvent, ReactElement } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type TextInputProps = {
    'data-test-ref'?: string;
    className?: string;
    defaultValue?: string;
    hasContent?: boolean;
    hasError?: boolean;
    /** @deprecated no underlying functionality */
    hasValidation?: boolean;
    id: string;
    inputClassName?: string;
    inputRef?: Ref<HTMLInputElement>;
    isEnabled?: boolean;
    label?: string;
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    prefixElement?: ReactElement;
    theme?: Themes;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';
    value?: string;
};
declare type TextInputType = ComponentWithoutChildren<TextInputProps>;

declare const TextInput: TextInputType;

export { TextInput };
