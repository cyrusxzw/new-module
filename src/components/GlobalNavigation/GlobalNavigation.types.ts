import type { Dispatch, SetStateAction, ReactElement } from 'react';
import type { Themes, ComponentWithChildren } from '~/types';

// type Tracking = {}; // @TODO https://aesoponline.atlassian.net/browse/CON-315

type CollectionImage = {
  altText: string;
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
};

type Link = Clickable & {
  alternateLabel?: string;
  isExternal?: boolean;
  onClick?: () => void;
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
  search: Trigger & {
    component: () => ReactElement;
  };
  stores: Trigger & {
    component: () => ReactElement;
  };
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

type SetActiveViewTypes = 'none' | 'mobile' | 'tablet' | 'desktop';

type GlobalNavigationStateContextType = {
  activeCollectionId: string;
  isOpen: boolean;
  setActiveCollectionId: (id: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  activeView: SetActiveViewTypes;
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
  onClose?: () => void;
  onOpen?: () => void;
  read: Read;
  theme?: Themes;
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
  taxonomyOfDesignElement: Link | null;
  topLevelCollections: Link[];
};

export type {
  Actions,
  Article,
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
  NestedCollection,
  NotableNestedCollection,
  Promotion,
  Read,
  SetActiveViewTypes,
  Trigger,
  UseGlobalNavigationStateContext,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
};
