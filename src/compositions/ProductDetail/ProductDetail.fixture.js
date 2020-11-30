/* istanbul ignore file */
export default {
  className: 'fixture-classname',
  product: {
    sku: 'ARD33',
    description:
      'Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula.',
    cartDisclaimer:
      'Quisque in felis id tellus condimentum scelerisque. Aliquam quis vestibulum felis, quis porta tellus',
    definitionList: [
      {
        term: 'Lorem ipsum dolor',
        id: 'Lorem-ipsum-dolor',
        description: 'Lorem ipsum dolort, consectetur adipiscing elit.',
      },
      {
        term: 'Ut consectetur mi',
        id: 'Ut-consectetur-mi',
        description: 'Ut consectetur, vitae libero imperdiet id.',
      },
    ],
    id: 'Lorem-ipsum-dolor',
    ingredients:
      'Maecenas mattis, urna vel commodo vehicula, diam tellus vestibulum urna, in lobortis lacus quam et arcu. Nunc arcu neque, ullamcorper et eros vitae, scelerisque posuere quam. Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula. Vestibulum quis malesuada nisi, a finibus eros. Praesent et vestibulum diam. Nam tristique viverra odio, ut tincidunt diam placerat eu. Proin eu magna imperdiet vulputate ex sit amet, laoreet neque. Praesent rhoncus ex quis elit vehicula, et tincidunt nisi scelerisque. Nullam ultrices scelerisque ex at efficitur.',
    keyIngredient: 'Maecenas mattis, urna vel commodo vehicula',
    productName: 'Lorem ipsum dolor',
    variantOptions: [
      {
        cartDisclaimer: 'Praesent rhoncus ex quis elit vehicula',
        size: '50 mL',
        sku: 'ARD33',
        price: '$56.45',
        image: {
          altText: 'ATL TAG',
          sizes: {
            large: './assets/images/Product/variant-one-large.png',
            medium: './assets/images/Product/variant-one-medium.png',
            small: './assets/images/Product/variant-one-small.png',
          },
        },
      },
      {
        cartDisclaimer: 'Pet tincidunt nisi scelerisque',
        size: '100 mL',
        sku: 'ARD32',
        price: '$86.97',
        image: {
          altText: 'ATL TAG',
          sizes: {
            large: './assets/images/Product/variant-two-large.png',
            medium: './assets/images/Product/variant-two-medium.png',
            small: './assets/images/Product/variant-two-small.png',
          },
        },
      },
    ],
  },
};
