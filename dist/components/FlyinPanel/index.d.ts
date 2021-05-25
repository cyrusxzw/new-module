/// <reference types="react" />
import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type FlyinPanelProps = {
    children: React.ReactNode;
    className?: string;
    copy?: {
        close?: string;
    };
    heading?: string;
    isVisible?: boolean;
    onClose: () => void;
    theme?: Themes;
};

declare const FlyinPanel: ({ children, className, copy, heading, isVisible, onClose, theme, }: FlyinPanelProps) => ReactElement | null;

export { FlyinPanel };
