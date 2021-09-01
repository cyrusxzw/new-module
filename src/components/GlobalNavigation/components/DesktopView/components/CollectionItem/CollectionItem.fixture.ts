import type { CollectionItemProps } from './CollectionItem.types';

const CollectionItemFixture: CollectionItemProps = {
  id: 'collection-item-id',
  label: 'Collection item label',
  title: 'Collection item title',
  type: 'link' as const,
  url: '#collection-item',
};

export { CollectionItemFixture };
