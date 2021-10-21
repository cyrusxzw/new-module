import { ChangeEvent } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type RadioGroupProps = {
    className?: string;
    dataTestRef?: string;
    errorMessage?: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    options?: {
        label?: string;
        value?: string;
    }[];
    theme?: Themes;
    value?: string;
};
declare type RadioGroupType = ComponentWithoutChildren<RadioGroupProps>;

declare const RadioGroup: RadioGroupType;

export { RadioGroup };
