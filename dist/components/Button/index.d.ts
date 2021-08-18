import React, { ReactNode, MouseEvent } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type Aria = {
    expanded?: boolean;
    haspopup?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
    hidden?: boolean;
    label?: string;
};

declare type ButtonBehaviourType = 'button' | 'reset' | 'submit';
declare type ButtonProps = {
    aria?: Pick<Aria, 'expanded' | 'haspopup' | 'hidden' | 'label'>;
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

declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button };
