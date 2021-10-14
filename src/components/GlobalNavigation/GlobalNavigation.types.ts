import type {
  Dispatch,
  SetStateAction,
  ReactElement,
  MutableRefObject,
} from 'react';
import type { Themes, ComponentWithChildren } from '~/types';

// type Tracking = {}; // @TODO https://aesoponline.atlassian.net/browse/CON-315

type TrackingCallback = {
  desktop: {
    promotionCardClick: (
      promotionCardTrackingProps: PromotionCardClickTracking,
    ) => void;
    promotionCardImpression: (
      promotionCardTrackingProps: PromotionCardImpressionTracking,
    ) => void;
    menuItemClick: (menuItemTrackingProps: MenuItemTrackingWithAction) => void;
    categoryItemClick: (
      categoryItemTrackingProps: CategoryItemTrackingWithAction,
    ) => void;
  };
  tablet: {
    tabletMenuItemClick: (
      tabletMenuItemTrackingProps: MenuItemTrackingWithAction,
    ) => void;
    tabletCategoryItemClick: (
      tabletCategoryItemTrackingProps: CategoryItemTrackingWithAction,
    ) => void;
  };
  mobile: () => void;
};

type PromotionCardImpressionTracking = {
  id: string;
  creative: string;
  position: string;
  isVisible: boolean;
};

type PromotionCardClickTracking = PromotionCardImpressionTracking & {
  englishLabel: string;
};

type MenuType = 'Shop' | 'Read' | 'Stores' | 'Search' | 'Menu';

type CategoryItemTracking = {
  menuCategory?: string;
  menuLabel: string;
  menuSection: 'Panel 1' | 'Panel 2';
  menuSubnav?: string;
  menuType: MenuType;
};

type MenuItemTrackingWithAction = {
  menuCategory: string;
  menuLabel: string;
  menuType: MenuType;
  action: 'Open' | 'Close' | 'Click' | 'Hover';
};

type CategoryItemTrackingWithAction = CategoryItemTracking & {
  action: 'Open' | 'Close' | 'Click' | 'Hover';
};

type CollectionImage = {
  id: string;
  altText: string;
  creative: string;
  sizes: {
    medium?: string;
    large?: string;
    small?: string;
  };
};

type Clickable = {
  dataTestRef?: string;
  id: string;
  label: string;
  title: string;
};

type Trigger = Clickable & {
  onClick: () => void;
  type: 'trigger';
  component?: () => ReactElement;
  isLegacyMenu?: boolean;
};

type Link = Clickable & {
  alternateLabel?: string;
  isExternal?: boolean;
  onClick?: () => void;
  menuSubnav?: string;
  menuType: 'Shop' | 'Read';
  panel: 'Panel 1' | 'Panel 2';
  type: 'link';
  url: string;
};

type Promotion = Clickable & {
  heading: string;
  image?: CollectionImage;
  type: 'promotion';
  url: string;
};

type Article = Clickable & {
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

type Read = Clickable & {
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

type Actions = {
  account: (
    | (Link & {
        recentOrders?: { url?: string; title?: string; label?: string };
      })
    | Trigger
  ) & {
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

type NotableNestedCollection = Clickable & {
  items: Link[];
  type: 'notable-nested-collection';
};

type NestedCollection = Clickable & {
  items: Link[];
  type: 'nested-collection';
};

type Collection = Clickable & {
  backLabel?: string;
  backgroundColor?: string;
  image?: CollectionImage;
  items: (Link | NestedCollection | NotableNestedCollection)[];
  promotion?: Promotion;
  topLevelCollectionLabel?: string;
  type: 'collection';
};

type GlobalNavigationType = ComponentWithChildren;

type GlobalNavigationStateContextProviderProps = {
  activeCollectionId?: string;
  isOpen?: boolean;
};

type GlobalNavigationStateContextProviderType = ComponentWithChildren<GlobalNavigationStateContextProviderProps>;

type ActiveViewTypes = 'none' | 'mobile' | 'tablet' | 'desktop';

type StickyNavType = {
  isFixed: boolean;
  isHidden: boolean;
  offsetTop: number;
};

type StickyNavScrollType = {
  stickyNavProps: StickyNavType;
  setStickyNavProps: (stickyNavProps: StickyNavType) => void;
  stickyNavRef?: MutableRefObject<HTMLDivElement | null>;
  prevScrollY?: MutableRefObject<number>;
  currentOffset?: number;
};

type GlobalNavigationStateContextType = {
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

type UseGlobalNavigationStateContext = () => GlobalNavigationStateContextType;

type UseGlobalNavigationStateStore = (
  props: GlobalNavigationStateContextProviderProps,
) => GlobalNavigationStateContextType;

type GlobalNavigationContextType = {
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
  trackingCallbacks: TrackingCallback;
};

type GlobalNavigationContextProviderProps = {
  value: GlobalNavigationContextType;
};

type GlobalNavigationContextProviderType = ComponentWithChildren<GlobalNavigationContextProviderProps>;

type UseGlobalNavigationStore = (
  value: GlobalNavigationContextType,
) => GlobalNavigationContextType;

type AllCollectionChildTypes = (
  | Link
  | NestedCollection
  | NotableNestedCollection
)[];

type GetCollectionLists = (
  items: AllCollectionChildTypes,
) => {
  nestedCollections: NestedCollection[];
  notableNestedCollections: NotableNestedCollection[];
  topLevelCollections: Link[];
};

export type {
  Article,
  Actions,
  ActiveViewTypes,
  CategoryItemTracking,
  CategoryItemTrackingWithAction,
  Clickable,
  Collection,
  CollectionImage,
  GetCollectionLists,
  GlobalNavigationContextProviderType,
  GlobalNavigationContextType,
  GlobalNavigationStateContextProviderType,
  GlobalNavigationStateContextType,
  GlobalNavigationType,
  Link,
  MenuItemTrackingWithAction,
  MenuType,
  NestedCollection,
  NotableNestedCollection,
  Promotion,
  PromotionCardImpressionTracking,
  PromotionCardClickTracking,
  Read,
  StickyNavType,
  StickyNavScrollType,
  Trigger,
  UseGlobalNavigationStateContext,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
};
