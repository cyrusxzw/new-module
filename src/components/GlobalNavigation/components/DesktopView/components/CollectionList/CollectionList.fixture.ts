import type { CollectionListProps } from './CollectionList.types';

const CollectionListFixture: CollectionListProps = {
  heading: 'Collection list heading',
  items: [
    {
      id: 'collection-list-item-id',
      label: 'Collections list item',
      alternateLabel: 'Collections list item alternate label',
      title: 'Collections list item title',
      type: 'link' as const,
      url: '#collection-list-item',
    },
  ],
  eyebrow: 'Collection list eyebrow',
};

export { CollectionListFixture };
