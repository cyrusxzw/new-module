const NestedCollectionFixture = {
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
    },
  ],
};

export { NestedCollectionFixture };
