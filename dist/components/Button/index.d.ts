import React__default, { ReactNode, MouseEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ButtonBehaviourType = 'button' | 'reset' | 'submit';
declare type ButtonProps = {
    aria?: {
        expanded?: boolean;
        haspopup?: boolean;
        hidden?: boolean;
        label?: string;
    };
    children?: ReactNode;
    className?: string;
    dataTestRef?: string;
    id?: string;
    isAlternate?: boolean;
    isEnabled?: boolean;
    isInline?: boolean;
    onClick?: (event: MouseEvent) => void;
    tabIndex?: number;
    title?: string;
    type?: ButtonBehaviourType;
    theme?: Themes;
};

declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

export { Button };
