import { Dispatch, SetStateAction } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

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
    url: string;
    type: 'link';
};
declare type Promotion = Clickable & {
    heading: string;
    type: 'promotion';
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
declare type Article = Clickable & {
    isVisible?: boolean;
    type: 'article';
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
declare type Actions = {
    logo: Link;
    search: Trigger;
    cart: Trigger;
    menu: Omit<Trigger, 'onClick'> & {
        closeTitle: string;
        closeLabel: string;
    };
    read: Trigger;
    account: Trigger | Link;
    visit: Trigger;
    support: Trigger;
};
declare type NestedCollection = Clickable & {
    items: Link[];
    type: 'nested-collection';
};
declare type Collection = Clickable & {
    backLabel?: string;
    backgroundColor?: string;
    items: (NestedCollection | Link)[];
    promotion?: Promotion;
    type: 'collection';
};
declare type GlobalNavigationProps = {
    className?: string;
};
declare type GlobalNavigationType = ComponentWithChildren<GlobalNavigationProps>;
declare type GlobalNavigationStateContextProviderType = ComponentWithChildren;
declare type GlobalNavigationStateContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};
declare type GlobalNavigationContextType = {
    actions: Actions;
    articles: Article[];
    className?: string;
    collections: Collection[];
    isVisuallyObstructed?: boolean;
    mobileViewClosedTheme?: Themes;
    theme?: Themes;
};
declare type GlobalNavigationContextProviderProps = {
    value: GlobalNavigationContextType;
};
declare type GlobalNavigationContextProviderType = ComponentWithChildren<GlobalNavigationContextProviderProps>;

declare const GlobalNavigation: GlobalNavigationType;

declare const GlobalNavigationStateContextProvider: GlobalNavigationStateContextProviderType;
declare const useGlobalNavigationStateContext: () => GlobalNavigationStateContextType;
declare const GlobalNavigationContextProvider: GlobalNavigationContextProviderType;
declare const useGlobalNavigationContext: () => GlobalNavigationContextType;

export { GlobalNavigation, GlobalNavigationContextProvider, GlobalNavigationStateContextProvider, GlobalNavigationType, useGlobalNavigationContext, useGlobalNavigationStateContext };
