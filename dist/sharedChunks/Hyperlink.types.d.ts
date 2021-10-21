import { ReactNode, MouseEvent } from 'react';
import { T as Themes } from './Themes.types';

declare type TextAlign = 'center' | 'left' | 'right';
declare type LinkStyle = 'External Button Link' | 'External No Icon Button Link' | 'External No Icon Link' | 'External Text Link' | 'Internal Button Link' | 'Internal No Icon Button Link' | 'Internal No Icon Link' | 'Internal Text Link';
declare type HyperlinkProps = {
    children: ReactNode;
    className?: string;
    dataTestId?: string;
    dataTestRef?: string;
    hasTargetInNewWindow?: boolean;
    id?: string;
    isAlternate?: boolean;
    isDownload?: boolean;
    kind?: LinkStyle;
    onClick?: (event: MouseEvent) => void;
    /** @deprecated use `kind` instead */
    style?: LinkStyle;
    tabIndex?: number;
    textAlign?: TextAlign;
    theme?: Themes;
    title?: string;
    url: string;
};

export { HyperlinkProps as H, LinkStyle as L };
