import type { ListItemProps } from './ListItem.types';

const ListItemFixture: ListItemProps = {
  itemProps: {
    id: 'nested-collection',
    label: 'Nested Collection',
    title: 'Nested Collection',
    type: 'nested-collection' as const,
    items: [
      {
        id: 'nested-link',
        label: 'Nested Link',
        title: 'Nested Link',
        type: 'link' as const,
        url: '#nested-link',
      },
    ],
  },
  isVisible: true,
  isNestedItem: false,
};

export { ListItemFixture };
