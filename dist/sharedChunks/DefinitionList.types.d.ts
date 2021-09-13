import { ReactNode } from 'react';
import { T as Themes } from './Themes.types';

declare type DefinitionListItem = {
    description?: ReactNode;
    id: string;
    term?: ReactNode;
};
declare type DefinitionListProps = {
    className?: string;
    hasBottomBorder?: boolean;
    isVisible?: boolean;
    items?: DefinitionListItem[];
    theme?: Themes;
};

export { DefinitionListProps as D, DefinitionListItem as a };
