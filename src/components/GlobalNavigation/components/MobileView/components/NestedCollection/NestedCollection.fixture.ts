import type { NestedCollectionProps } from './NestedCollection.types';

/* TODO{issue-11}: Improve fixture to be more reflective of tracking data
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
      ...navTrackingProps,
    },
  ],
};

export { NestedCollectionFixture };
