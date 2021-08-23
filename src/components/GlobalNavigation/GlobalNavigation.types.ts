import type { Dispatch, SetStateAction } from 'react';
import type { Themes, ComponentWithChildren } from '~/types';

// type Tracking = {}; // @TODO https://aesoponline.atlassian.net/browse/CON-315

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
  url: string;
  type: 'link';
};

type Promotion = Clickable & {
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

type Article = Clickable & {
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

type Actions = {
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

type NestedCollection = Clickable & {
  items: Link[];
  type: 'nested-collection';
};

type Collection = Clickable & {
  backLabel?: string;
  backgroundColor?: string;
  items: (NestedCollection | Link)[];
  promotion?: Promotion;
  type: 'collection';
};

type GlobalNavigationProps = {
  className?: string;
};

type GlobalNavigationType = ComponentWithChildren<GlobalNavigationProps>;

type GlobalNavigationStateContextProviderType = ComponentWithChildren;

type GlobalNavigationStateContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type UseGlobalNavigationStateStore = () => GlobalNavigationStateContextType;

type GlobalNavigationContextType = {
  actions: Actions;
  articles: Article[];
  className?: string;
  collections: Collection[];
  isVisuallyObstructed?: boolean;
  mobileViewClosedTheme?: Themes;
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
  GlobalNavigationContextProviderType,
  GlobalNavigationContextType,
  GlobalNavigationStateContextProviderType,
  GlobalNavigationStateContextType,
  GlobalNavigationType,
  Link,
  NestedCollection,
  Promotion,
  Trigger,
  UseGlobalNavigationStateStore,
  UseGlobalNavigationStore,
};
