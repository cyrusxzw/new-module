import { ReactElement, Dispatch, SetStateAction } from 'react';
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
    isExternal?: boolean;
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
    baseUrl?: string;
    image?: CollectionImage;
    items: (Link | NestedCollection)[];
    topLevelCollectionLabel?: string;
    type: 'read-collection';
};
declare type Actions = {
    account: ((Link & {
        recentOrders?: {
            url?: string;
            title?: string;
            label?: string;
        };
    }) | Trigger) & {
        isAuthenticated?: boolean;
    };
    cart: Trigger;
    logo: Link;
    shop: Omit<Trigger, 'onClick'> & {
        onClick?: () => void;
    };
    support: Trigger;
    menu: Omit<Trigger, 'onClick'> & {
        closeLabel: string;
        closeTitle: string;
        onClick?: () => void;
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
declare type GlobalNavigationType = ComponentWithChildren;
declare type GlobalNavigationStateContextProviderProps = {
    activeCollectionId?: string;
    isOpen?: boolean;
};
declare type GlobalNavigationStateContextProviderType = ComponentWithChildren<GlobalNavigationStateContextProviderProps>;
declare type SetActiveViewTypes = 'none' | 'mobile' | 'tablet' | 'desktop';
declare type GlobalNavigationStateContextType = {
    activeCollectionId: string;
    isOpen: boolean;
    setActiveCollectionId: (id: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    activeView: SetActiveViewTypes;
};
declare type UseGlobalNavigationStateContext = () => GlobalNavigationStateContextType;
declare type GlobalNavigationContextType = {
    actions: Actions;
    className?: string;
    collections: Collection[];
    desktopViewLogoTheme?: Themes;
    isVisuallyObstructed?: boolean;
    mobileViewClosedTheme?: Themes;
    onClose?: () => void;
    onOpen?: () => void;
    read: Read;
    theme?: Themes;
};
declare type GlobalNavigationContextProviderProps = {
    value: GlobalNavigationContextType;
};
declare type GlobalNavigationContextProviderType = ComponentWithChildren<GlobalNavigationContextProviderProps>;

declare const GlobalNavigation: GlobalNavigationType;

declare const GlobalNavigationStateContextProvider: GlobalNavigationStateContextProviderType;
declare const useGlobalNavigationStateContext: UseGlobalNavigationStateContext;
declare const GlobalNavigationContextProvider: GlobalNavigationContextProviderType;
declare const useGlobalNavigationContext: () => GlobalNavigationContextType;

declare type DesktopViewContextType = {
    closedClassName?: string;
    openClassName?: string;
};
declare type DesktopViewContextProviderType = ComponentWithChildren<DesktopViewContextType>;

declare const DesktopViewContextProvider: DesktopViewContextProviderType;

declare type MobileViewContextProviderProps = {
    closedClassName?: string;
    openClassName?: string;
};
declare type MobileViewContextProviderType = ComponentWithChildren<MobileViewContextProviderProps>;

declare const MobileViewContextProvider: MobileViewContextProviderType;

export { DesktopViewContextProvider, GlobalNavigation, GlobalNavigationContextProvider, GlobalNavigationStateContextProvider, GlobalNavigationType, MobileViewContextProvider, useGlobalNavigationContext, useGlobalNavigationStateContext };
