import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type MessageProps = {
    className?: string;
    copy: string;
    heading: string;
    id?: string;
    link?: {
        title: string;
        url: string;
    };
    theme?: Themes;
};

declare type SecondaryMessageProps = {
    className?: string;
    id?: string;
    items?: [MessageProps?, MessageProps?];
    theme?: Themes;
};

declare const SecondaryMessage: ({ className, id, items, theme, }: SecondaryMessageProps) => ReactElement | null;

export { SecondaryMessage };
