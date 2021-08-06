import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type ArticleCardProps = Clickable & {
    isVisible?: boolean;
    metaLabel: string;
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
declare type PromotionCard = Clickable & {
    heading: string;
    type: 'promotion-card';
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
    backLabel: string;
    items: (NestedCollection | Link)[];
    promotion?: PromotionCard;
    type: 'collection';
};
declare type MobileNavigationProps = {
    articles?: ArticleCardProps[];
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
