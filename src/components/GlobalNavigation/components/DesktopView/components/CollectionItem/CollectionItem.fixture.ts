import type { CollectionItemProps } from './CollectionItem.types';

/* TODO{issue-2}: Improve fixture to be more reflective of tracking data
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

const CollectionItemFixture: CollectionItemProps = {
  id: 'collection-item-id',
  label: 'Collection item label',
  title: 'Collection item title',
  type: 'link' as const,
  url: '#collection-item',
  ...navTrackingProps,
};

export { CollectionItemFixture };
