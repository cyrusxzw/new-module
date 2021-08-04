import type {
  Themes,
  ComponentWithoutChildren,
  ComponentWithChildren,
} from '~/types';

import type { SecondaryNavigationItems } from './components/SecondaryNavigation/SecondaryNavigation.types';

type Header = {
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

type MobileNavigationContextProviderProps = {
  activeCollectionId: string;
  activeNestedCollectionIds: string[];
  header: Header;
  isOpen: boolean;
  onBackButtonClick: () => void;
  onCollectionClick: (id: string) => void;
  onNestedCollectionClick: (id: string) => void;
};

type MobileNavigationContextProviderType = ComponentWithChildren<MobileNavigationContextProviderProps>;

type Clickable = {
  id: string;
  label: string;
  title: string;
};

type Link = Clickable & {
  url: string;
  type: 'link';
};

type Trigger = Clickable & {
  onClick: () => void;
  type: 'trigger';
};

type Card = Clickable & {
  heading: string;
  type: 'card';
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

type NestedCollection = Clickable & {
  items: Link[];
  type: 'nested-collection';
};

type Collection = Clickable & {
  items: (NestedCollection | Link | Card)[];
  type: 'collection';
};

type MobileNavigationProps = {
  className?: string;
  closedTheme?: Themes;
  header: Header;
  isVisuallyObstructed?: boolean;
  items: Collection[];
  secondaryItems?: SecondaryNavigationItems;
  theme?: Themes;
};

type MobileNavigationType = ComponentWithoutChildren<MobileNavigationProps>;

export type {
  Card,
  Clickable,
  Collection,
  Link,
  MobileNavigationContextProviderType,
  MobileNavigationContextProviderProps,
  MobileNavigationType,
  NestedCollection,
  Trigger,
};
