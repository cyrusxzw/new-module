import { Dispatch, SetStateAction, ReactElement } from 'react';
import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type TrackingCallback = {
    desktop: {
        desktopMenuItemClickOrHover: (menuItemTrackingProps: MenuItemTrackingWithAction) => void;
        desktopCategoryItemClickOrHover: (categoryItemTrackingProps: CategoryItemTrackingWithAction) => void;
    };
    tablet: {
        tabletMenuItemClick: (tabletMenuItemTrackingProps: MenuItemTrackingWithAction) => void;
        tabletCategoryItemClick: (tabletCategoryItemTrackingProps: CategoryItemTrackingWithAction) => void;
    };
    mobile: {
        mobileMenuItemClick: (mobileMenuItemTrackingProps: MenuItemTrackingWithMobileAction) => void;
        mobileCategoryItemClick: (mobileCategoryItemTrackingProps: CategoryItemTrackingWithMobileAction) => void;
    };
    common: {
        promotionCardClick: (promotionCardTrackingProps: PromotionCardClickTracking) => void;
        promotionCardImpression: (promotionCardTrackingProps: PromotionCardImpressionTracking) => void;
    };
};
declare type PromotionCardImpressionTracking = {
    id: string;
    creative: string;
    position: string;
    isVisible: boolean;
};
declare type PromotionCardClickTracking = PromotionCardImpressionTracking & {
    englishLabel: string;
};
declare type MenuType = 'Shop' | 'Read' | 'Stores' | 'Search' | 'Menu';
declare type CategoryItemTracking = {
    menuCategory: string;
    menuLabel: string;
    menuSection: 'Panel 1' | 'Panel 2' | 'Navbar';
    menuSubnav: string;
    menuType: MenuType;
};
declare type MenuItemTracking = {
    menuCategory: string;
    menuLabel: string;
    menuType: MenuType;
    menuSection: 'Panel 1' | 'Navbar';
};
declare type DesktopAndTabletTrackingActions = {
    action: 'Open' | 'Close' | 'Click' | 'Hover';
};
declare type MobileTrackingActions = {
    action: 'Open' | 'Close' | 'Click' | 'Hover' | 'Expand' | 'Collapse' | 'Back';
};
declare type CategoryItemTrackingWithAction = CategoryItemTracking & DesktopAndTabletTrackingActions;
declare type CategoryItemTrackingWithMobileAction = CategoryItemTracking & MobileTrackingActions;
declare type MenuItemTrackingWithAction = MenuItemTracking & DesktopAndTabletTrackingActions;
declare type MenuItemTrackingWithMobileAction = MenuItemTracking & MobileTrackingActions;
declare type CollectionImage = {
    id?: string;
    altText: string;
    creative?: string;
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
    url?: string;
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
    menuSubnav?: string;
    menuType: 'Shop' | 'Read';
    panel: 'Panel 1' | 'Panel 2';
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
    menuSubnav?: string;
    menuType: 'Shop' | 'Read';
    panel: 'Panel 1' | 'Panel 2';
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
declare type StickyNavType = {
    isFixed: boolean;
    isHidden: boolean;
    offsetTop: number;
};
declare type GlobalNavigationStateContextType = {
    activeCollectionId: string;
    activeView: ActiveViewTypes;
    isOpen: boolean;
    menuCategoryLabel: string;
    menuType: MenuType;
    setActiveCollectionId: (id: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setMenuCategoryLabel: (categoryLabel: string) => void;
    setMenuType: (menuType: MenuType) => void;
    setStickyNavProps: Dispatch<SetStateAction<StickyNavType>>;
    stickyNavProps: StickyNavType;
};
declare type UseGlobalNavigationStateContext = () => GlobalNavigationStateContextType;
declare type GlobalNavigationContextType = {
    actions: Actions;
    className?: string;
    collections: Collection[];
    isVisuallyObstructed?: boolean;
    isOpenSearchBackToMenu?: boolean;
    /** User created on Navigation close event callback */
    onClose?: () => void;
    /** User created on Navigation open event callback */
    onOpen?: () => void;
    read: Read;
    theme?: Themes;
    isLegacyMenu?: boolean;
    trackingCallbacks: TrackingCallback;
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
