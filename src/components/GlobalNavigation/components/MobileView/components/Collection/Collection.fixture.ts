const CollectionFixture = {
  id: 'collection',
  label: 'Collection',
  title: 'Collection',
  type: 'collection' as const,
  items: [
    {
      id: 'ink',
      label: 'Link',
      title: 'Link',
      type: 'link' as const,
      url: '#link',
    },
  ],
};

export { CollectionFixture };
