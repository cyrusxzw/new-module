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
  duration?: string;
  image?: CollectionImage;
  isVisible?: boolean;
  metaLabel: string;
  type: 'article';
  url: string;
};

type Read = Clickable & {
  articles: Article[];
  articlesListHeading?: string;
  backLabel?: string;
  backgroundColor?: string;
  image?: CollectionImage;
  items: (Link | NestedCollection)[];
  topLevelCollectionLabel?: string;
  type: 'read-collection';
};

type Actions = {
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
  visit: Trigger & {
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

type GlobalNavigationProps = {
  className?: string;
};

type GlobalNavigationType = ComponentWithChildren<GlobalNavigationProps>;

type GlobalNavigationStateContextProviderProps = {
  activeCollectionId?: string;
  isOpen?: boolean;
};

type GlobalNavigationStateContextProviderType = ComponentWithChildren<GlobalNavigationStateContextProviderProps>;

type GlobalNavigationStateContextType = {
  activeCollectionId: string;
  isOpen: boolean;
  setActiveCollectionId: (id: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type UseGlobalNavigationStateStore = (
  props: GlobalNavigationStateContextProviderProps,
) => GlobalNavigationStateContextType;

type GlobalNavigationContextType = {
  actions: Actions;
  className?: string;
  collections: Collection[];
  desktopViewLogoTheme?: Themes;
  isVisuallyObstructed?: boolean;
  mobileViewClosedTheme?: Themes;
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

export type {
  Actions,
  Article,
  Clickable,
  Collection,
  CollectionImage,
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
  Trigger,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
};
