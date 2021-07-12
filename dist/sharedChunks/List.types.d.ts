/// <reference types="react" />
import { T as Themes } from './Themes.types';

declare type ListItem = {
    content: React.ReactNode;
    id: string;
};
declare type ListProps = {
    className?: string;
    items?: ListItem[];
    listItemClassName?: string;
    theme?: Themes;
};

export { ListItem as L, ListProps as a };
