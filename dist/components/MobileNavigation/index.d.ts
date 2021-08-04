import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type SecondaryNavigationItems = (Trigger | Link)[];

declare type Header = {
    logo: {
        url: string;
        screenReaderLabel: string;
        title: string;
    };
    search: {
        onClick: () => void;
        screenReaderLabel: string;
        title: string;
    };
    cart: {
        label: string;
        onClick: () => void;
        title: string;
    };
    menu: {
        screenReaderOpenLabel: string;
        screenReaderCloseLabel: string;
        openTitle: string;
        closeTitle: string;
    };
};
declare type Clickable = {
    id: string;
    label: string;
    title: string;
};
declare type Link = Clickable & {
    url: string;
    type: 'link';
};
declare type Trigger = Clickable & {
    onClick: () => void;
    type: 'trigger';
};
declare type Card = Clickable & {
    heading: string;
    type: 'card';
    url: string;
    image?: {
        altText: string;
        sizes: {
            large?: string;
            medium?: string;
            small?: string;
            xLarge?: string;
            xSmall?: string;
        };
    };
};
declare type NestedCollection = Clickable & {
    items: Link[];
    type: 'nested-collection';
};
declare type Collection = Clickable & {
    items: (NestedCollection | Link | Card)[];
    type: 'collection';
};
declare type MobileNavigationProps = {
    className?: string;
    closedTheme?: Themes;
    header: Header;
    isVisuallyObstructed?: boolean;
    items: Collection[];
    secondaryItems?: SecondaryNavigationItems;
    theme?: Themes;
};
declare type MobileNavigationType = ComponentWithoutChildren<MobileNavigationProps>;

declare const MobileNavigation: MobileNavigationType;

export { MobileNavigation };
