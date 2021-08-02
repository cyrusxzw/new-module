import React__default, { ReactNode } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type AccordionItem = {
    content: ReactNode;
    heading: string;
    id: string;
};
declare type AccordionProps = {
    className?: string;
    id?: string;
    items?: AccordionItem[];
    theme?: Themes;
    wrapperClass?: string;
};

declare const Accordion: React__default.ForwardRefExoticComponent<AccordionProps & React__default.RefAttributes<HTMLDivElement>>;

export { Accordion };
