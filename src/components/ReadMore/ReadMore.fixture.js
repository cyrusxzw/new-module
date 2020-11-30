/* istanbul ignore file */
export default {
  articles: [
    {
      id: 'test_1',
      category: 'Product',
      longTitle: '1. Senorial consectetur adipiscing elit.',
      uri: 'https://www.aesop.com/au/r/careers',
      verticalThumbnail: {
        altText: 'vertical_hub',
        large: './assets/images/ContentHubArticle/vertical_hub.jpg',
        medium: './assets/images/ContentHubArticle/vertical_hub.jpg',
        small: './assets/images/ContentHubArticle/vertical_hub.jpg',
      },
      horizontalThumbnail: {
        altText: 'horizontal_hub',
        large: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        medium: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        small: './assets/images/ContentHubArticle/horizontal_hub.jpg',
      },
      readingTime: '5 minute read',
      onClick: () => {
        console.log('click tracking: test_1'); // eslint-disable-line no-console
      },
    },
    {
      id: 'test_2',
      category: 'Product',
      longTitle:
        '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare mauris, id dictum ante.',
      uri: 'https://www.aesop.com/au/r/careers',
      verticalThumbnail: {
        altText: 'vertical_hub',
        large: './assets/images/ContentHubArticle/vertical_hub.jpg',
        medium: './assets/images/ContentHubArticle/vertical_hub.jpg',
        small: './assets/images/ContentHubArticle/vertical_hub.jpg',
      },
      horizontalThumbnail: {
        altText: 'horizontal_hub',
        large: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        medium: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        small: './assets/images/ContentHubArticle/horizontal_hub.jpg',
      },
      readingTime: '5 minute read',
      onClick: () => {
        console.log('click tracking: test_2'); // eslint-disable-line no-console
      },
    },
    {
      id: 'test_3',
      category: 'Culture',
      longTitle:
        '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare, id dictum ante. Suspendisse et ornare mauris, id dictum ante.',
      uri: 'https://www.aesop.com/au/r/careers',
      verticalThumbnail: {
        altText: 'vertical_hub',
        large: './assets/images/ContentHubArticle/vertical_hub.jpg',
        medium: './assets/images/ContentHubArticle/vertical_hub.jpg',
        small: './assets/images/ContentHubArticle/vertical_hub.jpg',
      },
      horizontalThumbnail: {
        altText: 'horizontal_hub',
        large: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        medium: './assets/images/ContentHubArticle/horizontal_hub.jpg',
        small: './assets/images/ContentHubArticle/horizontal_hub.jpg',
      },
      readingTime: '5 minute read',
      onClick: () => {
        console.log('click tracking: test_3'); // eslint-disable-line no-console
      },
    },
  ],
};
