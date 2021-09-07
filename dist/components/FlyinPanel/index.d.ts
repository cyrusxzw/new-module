/// <reference types="react" />
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type FlyinPanelType = ComponentWithChildren<FlyinPanelProps>;

declare const FlyinPanel: FlyinPanelType;

export { FlyinPanel };
