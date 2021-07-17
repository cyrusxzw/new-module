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

type NestedCollection = Clickable & {
  items: Link[];
  type: 'nested-collection';
};

type Collection = Clickable & {
  items: (NestedCollection | Link)[];
  type: 'collection';
};

type MobileNavigationProps = {
  className?: string;
  isOpen: boolean;
  items: Collection[];
  onCloseButtonClick: () => void;
  secondaryItems?: SecondaryNavigationItems;
  theme?: Themes;
};

type MobileNavigationType = ComponentWithoutChildren<MobileNavigationProps>;

export type {
  MobileNavigationType,
  MobileNavigationContextProviderType,
  NestedCollection,
  Collection,
  Clickable,
  Trigger,
  Link,
};
