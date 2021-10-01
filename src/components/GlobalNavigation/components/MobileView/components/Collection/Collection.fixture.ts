import type { CollectionProps } from './Collection.types';

const CollectionFixture: CollectionProps = {
  id: 'collection',
  backLabel: 'Return from collection',
  isVisible: false,
  label: 'Collection',
  shouldHideTopCollection: false,
  title: 'Collection',
  items: [
    {
      id: 'Link',
      label: 'Link',
      title: 'Link',
      type: 'link' as const,
      url: '#link',
    },
  ],
  promotion: {
    id: 'see-all-skin-care-card',
    label: 'See all Skin Care Card Label',
    title: 'See all Skin Care Card',
    type: 'promotion' as const,
    url: '#see-all-skin-care-card',
    heading: 'See all Skin Care Card Heading',
    image: {
      altText: 'Image of See all Skin Care',
      sizes: {
        large:
          'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
        medium:
          'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
        small:
          'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
      },
    },
  },
};

export { CollectionFixture };