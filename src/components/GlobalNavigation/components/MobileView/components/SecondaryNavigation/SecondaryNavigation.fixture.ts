import type { SecondaryNavigationProps } from './SecondaryNavigation.types';

const SecondaryNavigationFixture: SecondaryNavigationProps = {
  items: [
    {
      id: 'link-one',
      label: 'Link One',
      title: 'Link One',
      type: 'link' as const,
      url: '#link-one',
    },
    {
      id: 'link-two',
      label: 'Link Two',
      title: 'Link Two',
      type: 'link' as const,
      url: '#link-two',
    },
  ],
};

export { SecondaryNavigationFixture };
