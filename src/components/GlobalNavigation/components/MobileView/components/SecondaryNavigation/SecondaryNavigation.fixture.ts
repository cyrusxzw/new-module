const SecondaryNavigationFixture = {
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
  hasAriaHidden: false,
};

export { SecondaryNavigationFixture };
