import type { ComponentWithoutChildren } from '~/types';
import type { Collection } from '~/components/GlobalNavigation/GlobalNavigation.types';

type TopLevelCollectionListsProps = Collection;

type TopLevelCollectionListsType = ComponentWithoutChildren<TopLevelCollectionListsProps>;

type TopLevelCollectionLayoutType = ComponentWithoutChildren;

export type { TopLevelCollectionLayoutType, TopLevelCollectionListsType };
