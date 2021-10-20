import type { ListItemProps } from './ListItem.types';

/* TODO{issue-10}: Improve fixture to be more reflective of tracking data
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
        ...navTrackingProps,
      },
    ],
  },
  isVisible: true,
  isNestedItem: false,
};

export { ListItemFixture };
