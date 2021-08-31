import { Dispatch, SetStateAction, ReactElement } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type CollectionImage = {
    altText: string;
    sizes: {
        medium?: string;
        large?: string;
        small?: string;
    };
};
declare type Clickable = {
    dataTestRef?: string;
    id: string;
    label: string;
    title: string;
};
declare type Trigger = Clickable & {
    onClick: () => void;
    type: 'trigger';
};
declare type Link = Clickable & {
    alternateLabel?: string;
    type: 'link';
    url: string;
};
declare type Promotion = Clickable & {
    heading: string;
    image?: CollectionImage;
    type: 'promotion';
    url: string;
};
declare type Article = Clickable & {
    image?: CollectionImage;
    isVisible?: boolean;
    metaDuration?: string;
    metaLabel?: string;
    type: 'article';
    url: string;
};
declare type Read = Clickable & {
    articles: Article[];
    articlesListHeading?: string;
    backLabel?: string;
    backgroundColor?: string;
    image?: CollectionImage;
    items: (Link | NestedCollection)[];
    topLevelCollectionLabel?: string;
    type: 'read-collection';
};
declare type Actions = {
    account: Link | Trigger;
    cart: Trigger;
    logo: Link;
    support: Trigger;
    menu: Omit<Trigger, 'onClick'> & {
        closeLabel: string;
        closeTitle: string;
    };
    search: Trigger & {
        component: () => ReactElement;
    };
    stores: Trigger & {
        component: () => ReactElement;
    };
};
declare type NotableNestedCollection = Clickable & {
    items: Link[];
    type: 'notable-nested-collection';
};
declare type NestedCollection = Clickable & {
    items: Link[];
    type: 'nested-collection';
};
declare type Collection = Clickable & {
    backLabel?: string;
    backgroundColor?: string;
    image?: CollectionImage;
    items: (Link | NestedCollection | NotableNestedCollection)[];
    promotion?: Promotion;
    topLevelCollectionLabel?: string;
    type: 'collection';
};
declare type GlobalNavigationProps = {
    className?: string;
};
declare type GlobalNavigationType = ComponentWithChildren<GlobalNavigationProps>;
declare type GlobalNavigationStateContextProviderProps = {
    activeCollectionId?: string;
    isOpen?: boolean;
};
declare type GlobalNavigationStateContextProviderType = ComponentWithChildren<GlobalNavigationStateContextProviderProps>;
declare type GlobalNavigationStateContextType = {
    activeCollectionId: string;
    isOpen: boolean;
    setActiveCollectionId: (id: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};
declare type GlobalNavigationContextType = {
    actions: Actions;
    className?: string;
    collections: Collection[];
    desktopViewLogoTheme?: Themes;
    isVisuallyObstructed?: boolean;
    mobileViewClosedTheme?: Themes;
    read: Read;
    theme?: Themes;
};
declare type GlobalNavigationContextProviderProps = {
    value: GlobalNavigationContextType;
};
declare type GlobalNavigationContextProviderType = ComponentWithChildren<GlobalNavigationContextProviderProps>;

/** @TODO Tracking exand / collapse */
/** Add label to where closed + log current analytic push */
/** Hovering as a tracking push */
declare const GlobalNavigation: GlobalNavigationType;

declare const GlobalNavigationStateContextProvider: GlobalNavigationStateContextProviderType;
declare const useGlobalNavigationStateContext: () => GlobalNavigationStateContextType;
declare const GlobalNavigationContextProvider: GlobalNavigationContextProviderType;
declare const useGlobalNavigationContext: () => GlobalNavigationContextType;

export { GlobalNavigation, GlobalNavigationContextProvider, GlobalNavigationStateContextProvider, GlobalNavigationType, useGlobalNavigationContext, useGlobalNavigationStateContext };
