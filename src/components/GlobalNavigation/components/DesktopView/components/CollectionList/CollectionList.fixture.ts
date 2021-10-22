import type { CollectionListProps } from './CollectionList.types';

/* TODO{issue-5}: Improve fixture to be more reflective of tracking data
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
      ...navTrackingProps,
    },
  ],
  ...navTrackingProps,
  eyebrow: 'Collection list eyebrow',
  menuSubnav: 'Collection list menu subnav',
};

export { CollectionListFixture };
