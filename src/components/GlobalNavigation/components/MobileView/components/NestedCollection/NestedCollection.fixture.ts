import type { NestedCollectionProps } from './NestedCollection.types';

const NestedCollectionFixture: NestedCollectionProps = {
  id: 'nested-collection',
  label: 'Nested Collection',
  title: 'Nested Collection',
  items: [
    {
      id: 'nested-link',
      label: 'Nested Link',
      title: 'Nested Link',
      type: 'link' as const,
      url: '#nested-link',
    },
  ],
};

export { NestedCollectionFixture };
