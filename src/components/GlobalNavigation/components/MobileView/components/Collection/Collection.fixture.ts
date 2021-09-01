import type { CollectionProps } from './Collection.types';

const CollectionFixture: CollectionProps = {
  id: 'collection',
  label: 'Collection',
  title: 'Collection',
  items: [
    {
      id: 'ink',
      label: 'Link',
      title: 'Link',
      type: 'link' as const,
      url: '#link',
    },
  ],
};

export { CollectionFixture };
