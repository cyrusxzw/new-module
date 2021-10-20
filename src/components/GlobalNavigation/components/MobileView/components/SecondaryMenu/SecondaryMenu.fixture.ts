import type { SecondaryMenuProps } from './SecondaryMenu.types';

/* TODO{issue-14}: Improve fixture to be more reflective of tracking data
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

const SecondaryMenuFixture: SecondaryMenuProps = {
  items: [
    {
      id: 'link-one',
      label: 'Link One',
      title: 'Link One',
      type: 'link' as const,
      url: '#link-one',
      ...navTrackingProps,
    },
    {
      id: 'link-two',
      label: 'Link Two',
      title: 'Link Two',
      type: 'link' as const,
      url: '#link-two',
      ...navTrackingProps,
    },
    {
      id: 'collection-one',
      label: 'Collection One',
      title: 'Collection One',
      type: 'trigger' as const,
      onClick: () => null,
    },
  ],
};

export { SecondaryMenuFixture };
