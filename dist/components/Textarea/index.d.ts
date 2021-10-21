import { Ref, FocusEvent, ChangeEvent } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type TextareaProps = {
    className?: string;
    dataTestRef?: string;
    defaultValue?: string;
    id: string;
    inputRef?: Ref<HTMLTextAreaElement>;
    isEnabled?: boolean;
    maxLength?: number;
    name?: string;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    textareaClassName?: string;
    theme?: Themes;
    value?: string;
};
declare type TextareaType = ComponentWithoutChildren<TextareaProps>;

declare const Textarea: TextareaType;

export { Textarea };
