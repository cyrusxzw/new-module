/// <reference types="react" />
import React$1 from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { T as TransitionTypeLabel } from '../../sharedChunks/Transition.types';

declare type HorizontalPadding = 'none' | 'small';
declare type VerticalPadding = 'none' | 'small' | 'medium' | 'large';
declare type PodiumProps = {
    backgroundColor?: string;
    children?: React.ReactNode;
    className?: string;
    'data-test-ref'?: string;
    horizontalPadding?: HorizontalPadding;
    id?: string;
    isActive?: boolean;
    isActiveOnMount?: boolean;
    isHorizontalFlushOnLarge?: boolean;
    isHorizontalFlushOnMedium?: boolean;
    isHorizontalFlushOnSmall?: boolean;
    paddingBottom?: VerticalPadding;
    paddingLeft?: HorizontalPadding;
    paddingRight?: HorizontalPadding;
    paddingTop?: VerticalPadding;
    theme?: Themes;
    transition?: TransitionTypeLabel;
    verticalPadding?: VerticalPadding;
};

declare const Podium: React$1.ForwardRefExoticComponent<PodiumProps & React$1.RefAttributes<HTMLDivElement>>;

export { Podium };
