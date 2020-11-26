export default {
  breadcrumbs: {
    items: [
      {
        label: 'Suspendisse',
        id: 'suspendisse',
        url: '/',
      },
      { label: 'Maecenas luctus', id: 'maecenas-luctus', url: '/' },
    ],
  },
  className: 'fixture-classname',
  theme: 'dark',
  product: {
    size: '50 mL',
    sku: 'ARD33',
    description:
      'Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula.',
    definitionList: [
      {
        term: 'Lorem ipsum dolor',
        id: 'Lorem-ipsum-dolor',
        description: 'Lorem ipsum dolort, consectetur adipiscing elit.',
        isExpandable: false,
      },
      {
        term: 'Ut consectetur mi',
        id: 'Ut-consectetur-mi',
        description: 'Ut consectetur, vitae libero imperdiet id.',
        isExpandable: false,
      },
      {
        term: 'Pellentesque tristique',
        id: 'Pellentesque-tristique',
        description: 'Maecenas mattis, urna vel commodo vehicula',
        isExpandable: true,
      },
    ],
    id: 'Lorem-ipsum-dolor',
    flyinPanel:
      'Maecenas mattis, urna vel commodo vehicula, diam tellus vestibulum urna, in lobortis lacus quam et arcu. Nunc arcu neque, ullamcorper et eros vitae, scelerisque posuere quam. Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula. Vestibulum quis malesuada nisi, a finibus eros. Praesent et vestibulum diam. Nam tristique viverra odio, ut tincidunt diam placerat eu. Proin eu magna imperdiet vulputate ex sit amet, laoreet neque. Praesent rhoncus ex quis elit vehicula, et tincidunt nisi scelerisque. Nullam ultrices scelerisque ex at efficitur.',
    productName: 'Lorem ipsum dolor',
    imageSize: 'Small',
    upSellProduct: {
      image: {
        altText: 'Product Extract',
        small:
          'https://www.aesop.com/medias/Aesop-Kits-Gift-Kits-2019-20-The-Reveller-with-Product-Small-781x524px.png?context=bWFzdGVyfGltYWdlc3wxMTMwMjN8aW1hZ2UvcG5nfGltYWdlcy9oZjgvaDI1LzkxNTAzNjg5NDAwNjIucG5nfDllZjNkMjBkNjZhZTI0OGRhZWZhOGJlMzA5NDM3OTg4ZGFlNjE1MWY1ZDg2ZmU4MjUwZmEwOWMwMmRkNzhmNDg',
      },
      name: 'The Reveller Fragrant hand and body care',
      url: '/',
    },
    variantOptions: [
      {
        cartDisclaimer: 'Praesent rhoncus ex quis elit vehicula',
        size: '50 mL - In stock',
        sku: 'ARD33',
        price: '$26.45',
        isInStock: true,
        image: {
          altText: 'alt-tag-ARD33',
          sizes: {
            large:
              'https://www.aesop.com/medias/Aesop-Kits-Gift-Kits-2020-21-The-Ardent-Nomad-Hybris-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0MTI1MzB8aW1hZ2UvcG5nfGltYWdlcy9oZjcvaDVlLzk1NjMwMjE3MDUyNDYucG5nfGUyYjQyMjlmMDQ0ZjdlOTRjMzAyNDczYzA2NGQ1Yzk0YWI4ZWQ0OTBkMmQzYWNjNWMxMjZjMDU1YTZjZDFhMzE',
            medium:
              'https://www.aesop.com/medias/Aesop-Kits-Gift-Kits-2020-21-The-Ardent-Nomad-Hybris-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0MTI1MzB8aW1hZ2UvcG5nfGltYWdlcy9oZjcvaDVlLzk1NjMwMjE3MDUyNDYucG5nfGUyYjQyMjlmMDQ0ZjdlOTRjMzAyNDczYzA2NGQ1Yzk0YWI4ZWQ0OTBkMmQzYWNjNWMxMjZjMDU1YTZjZDFhMzE',
            small:
              'https://www.aesop.com/medias/Aesop-Kits-Gift-Kits-2020-21-The-Ardent-Nomad-Hybris-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0MTI1MzB8aW1hZ2UvcG5nfGltYWdlcy9oZjcvaDVlLzk1NjMwMjE3MDUyNDYucG5nfGUyYjQyMjlmMDQ0ZjdlOTRjMzAyNDczYzA2NGQ1Yzk0YWI4ZWQ0OTBkMmQzYWNjNWMxMjZjMDU1YTZjZDFhMzE',
          },
        },
      },
      {
        cartDisclaimer: 'Pet tincidunt nisi scelerisque',
        size: '100 mL - Not in stock',
        sku: 'ARD32',
        price: '$86.97',
        isInStock: false,
        image: {
          altText: 'alt-tag-ARD32',
          sizes: {
            large: './assets/images/Product/variant-two-large.png',
            medium: './assets/images/Product/variant-two-medium.png',
            small: './assets/images/Product/variant-two-small.png',
          },
        },
      },
    ],
  },
  variantOutOfStock: [
    {
      cartDisclaimer: 'Nunc sagittis ultrices dignissim',
      size: '50 ml',
      sku: 'ARD33',
      price: '$26.45',
      isInStock: false,
      image: {
        altText: 'alt-tag-ARD33',
        sizes: {
          large: './assets/images/Product/variant-one-large.png',
          medium: './assets/images/Product/variant-one-medium.png',
          small: './assets/images/Product/variant-one-small.png',
        },
      },
    },
  ],
};
