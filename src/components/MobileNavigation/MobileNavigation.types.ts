import type {
  Themes,
  ComponentWithoutChildren,
  ComponentWithChildren,
} from '~/types';

import type { SecondaryNavigationItems } from './components/SecondaryNavigation/SecondaryNavigation.types';

type MobileNavigationContextProviderProps = {
  activeId: string;
  activeNestedIds: string[];
  onBackButtonClick: () => void;
  onClick: (id: string) => void;
  onNestedClick: (id: string) => void;
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
  isVisuallyObstructed?: boolean;
  items: Collection[];
  onCartClick: () => void;
  onLoginClick: () => void;
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
  MobileNavigationType,
  NestedCollection,
  Trigger,
};
