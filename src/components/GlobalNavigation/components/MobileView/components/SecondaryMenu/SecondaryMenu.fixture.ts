import type { SecondaryMenuProps } from './SecondaryMenu.types';

const SecondaryMenuFixture: SecondaryMenuProps = {
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
