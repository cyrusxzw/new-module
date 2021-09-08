import type { ComponentWithoutChildren } from '~/types';
import type { Link } from '~/components/GlobalNavigation/GlobalNavigation.types';

type CollectionListProps = { heading?: string; id: string; items: Link[] };

type CollectionListType = ComponentWithoutChildren<CollectionListProps>;

export type { CollectionListType };
