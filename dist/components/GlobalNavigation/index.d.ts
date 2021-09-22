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
    component?: () => ReactElement;
    isLegacyMenu?: boolean;
};
declare type Link = Clickable & {
    alternateLabel?: string;
    isExternal?: boolean;
    onClick?: () => void;
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
    search: Trigger;
    stores: Trigger;
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
declare type ActiveViewTypes = 'none' | 'mobile' | 'tablet' | 'desktop';
declare type GlobalNavigationStateContextType = {
    activeCollectionId: string;
    isOpen: boolean;
    setActiveCollectionId: (id: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    activeView: ActiveViewTypes;
};
declare type UseGlobalNavigationStateContext = () => GlobalNavigationStateContextType;
declare type GlobalNavigationContextType = {
    actions: Actions;
    className?: string;
    collections: Collection[];
    isVisuallyObstructed?: boolean;
    /** User created on Navigation close event callback */
    onClose?: () => void;
    /** User created on Navigation open event callback */
    onOpen?: () => void;
    read: Read;
    theme?: Themes;
    isLegacyMenu?: boolean;
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
    closedLogoTheme?: Themes;
    openClassName?: string;
};
declare type DesktopViewContextProviderType = ComponentWithChildren<DesktopViewContextType>;

declare const DesktopViewContextProvider: DesktopViewContextProviderType;

declare type MobileViewContextProviderProps = {
    closedClassName?: string;
    closedTheme?: Themes;
    openClassName?: string;
};
declare type MobileViewContextProviderType = ComponentWithChildren<MobileViewContextProviderProps>;

declare const MobileViewContextProvider: MobileViewContextProviderType;

declare type TabletViewContextProviderProps = {
    closedClassName?: string;
    closedLogoTheme?: Themes;
    openClassName?: string;
};
declare type TabletViewContextProviderType = ComponentWithChildren<TabletViewContextProviderProps>;

declare const TabletViewContextProvider: TabletViewContextProviderType;

export { DesktopViewContextProvider, GlobalNavigation, GlobalNavigationContextProvider, GlobalNavigationStateContextProvider, GlobalNavigationType, MobileViewContextProvider, TabletViewContextProvider, useGlobalNavigationContext, useGlobalNavigationStateContext };
