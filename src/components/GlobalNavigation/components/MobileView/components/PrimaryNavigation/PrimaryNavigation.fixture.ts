import type { PrimaryNavigationProps } from './PrimaryNavigation.types';

const PrimaryNavigationFixture: PrimaryNavigationProps = {
  items: [
    {
      id: 'primary-navigation-collection-id',
      label: 'Primary navigation collection label',
      title: 'Primary navigation collection title',
      type: 'collection' as const,
      items: [
        {
          id: 'primary-navigation-item-id',
          label: 'Primary navigation item label',
          title: 'Primary navigation item title',
          type: 'link' as const,
          url: '#primary-navigation-item',
        },
      ],
    },
  ],
};

export { PrimaryNavigationFixture };
