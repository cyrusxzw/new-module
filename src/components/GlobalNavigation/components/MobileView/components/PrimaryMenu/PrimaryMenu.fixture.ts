import type { PrimaryMenuProps } from './PrimaryMenu.types';

/* TODO{issue-13}: Improve fixture to be more reflective of tracking data
 * Currently implemented type to satisfy typescript for this fixture
 */

type NavTrackingPropsType = {
  menuType: 'Shop' | 'Read';
  panel: 'Panel 1' | 'Panel 2';
};

const navTrackingProps: NavTrackingPropsType = {
  menuType: 'Shop',
  panel: 'Panel 1',
};

const PrimaryMenuFixture: PrimaryMenuProps = {
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
          ...navTrackingProps,
        },
      ],
    },
  ],
};

export { PrimaryMenuFixture };
