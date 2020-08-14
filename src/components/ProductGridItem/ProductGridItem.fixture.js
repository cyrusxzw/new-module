export default {
  variantOptions: [
    {
      size: '50 mL - In stock',
      sku: 'ARD33',
      price: '$26.45',
      isInStock: true,
      image: {
        altText: 'alt-tag-ARD33',
        sizes: {
          large: './assets/images/Product/variant-one-large.png',
          medium: './assets/images/Product/variant-one-medium.png',
          small: './assets/images/Product/variant-one-small.png',
        },
      },
    },
    {
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
    {
      size: '180 mL - In stock',
      sku: 'ARD30',
      price: '$96.97',
      isInStock: true,
      image: {
        altText: 'alt-tag-ARD32',
        sizes: {
          large: './assets/images/Product/variant-two-large.png',
          medium: './assets/images/Product/variant-two-medium.png',
          small: './assets/images/Product/variant-two-small.png',
        },
      },
    },
    {
      alternateAction: {
        url: '/?searchMenu=open',
        label: 'Visit Store - $89.45',
      },
      size: '500 mL - Alternate action',
      sku: 'ARD31',
      price: '$109.45',
      isInStock: true,
      image: {
        altText: 'alt-tag-ARD31',
        sizes: {
          large: './assets/images/Product/variant-two-large.png',
          medium: './assets/images/Product/variant-two-medium.png',
          small: './assets/images/Product/variant-two-small.png',
        },
      },
    },
  ],
};
