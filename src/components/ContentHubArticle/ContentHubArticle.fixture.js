const ContentHubArticleFixture = {
  id: 'test_id',
  category: 'Product',
  dataTestRef: 'test_id',
  longTitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare mauris, id dictum ante.',
  verticalThumbnail: {
    altText: 'vertical_hub',
    sizes: {
      large: './assets/images/ContentHubArticle/vertical_hub.jpg',
      medium: './assets/images/ContentHubArticle/vertical_hub.jpg',
      small: './assets/images/ContentHubArticle/vertical_hub.jpg',
    },
  },
  horizontalThumbnail: {
    altText: 'horizontal_hub',
    sizes: {
      large: './assets/images/ContentHubArticle/horizontal_hub.jpg',
      medium: './assets/images/ContentHubArticle/horizontal_hub.jpg',
      small: './assets/images/ContentHubArticle/horizontal_hub.jpg',
    },
  },
  uri: 'https://www.aesop.com/au/r/careers',
  readingTime: '5 minute read',
  onClick: () => {
    console.log('click tracking: test_id'); // eslint-disable-line no-console
  },
};

export { ContentHubArticleFixture };
