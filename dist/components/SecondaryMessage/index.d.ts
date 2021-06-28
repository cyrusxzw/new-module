import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type SecondaryMessageType = ComponentWithoutChildren<SecondaryMessageProps>;

declare const SecondaryMessage: SecondaryMessageType;

export { SecondaryMessage };
