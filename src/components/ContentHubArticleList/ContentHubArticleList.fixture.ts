const ContentHubArticleListFixture = {
  articles: [
    {
      id: '4',
      category: 'Product',
      longTitle: '4. Senorial consectetur adipiscing elit.',
      uri: 'https://www.aesop.com/au/r/careers',
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
      readingTime: '15 minute read',
      onClick: (): void => {
        console.log('click tracking: test_1'); // eslint-disable-line no-console
      },
    },
    {
      id: '3',
      category: 'Product',
      longTitle:
        '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare mauris, id dictum ante.',
      uri: 'https://www.aesop.com/au/r/careers',
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
      readingTime: '15 minute read',
      onClick: (): void => {
        console.log('click tracking: test_2'); // eslint-disable-line no-console
      },
    },
    {
      id: '2',
      category: 'Culture',
      longTitle:
        '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare, id dictum ante. Suspendisse et ornare mauris, id dictum ante.',
      uri: 'https://www.aesop.com/au/r/careers',
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
      readingTime: '15 minute read',
      onClick: (): void => {
        console.log('click tracking: test_3'); // eslint-disable-line no-console
      },
    },
    {
      id: '1',
      category: 'Aesop Spotify',
      longTitle:
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ornare mauris, id dictum ante. Suspendisse et ornare mauris, id dictum ante.',
      uri: 'https://www.aesop.com/au/r/careers',
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
      readingTime: '15 minute read',
      onClick: (): void => {
        console.log('click tracking: test_4'); // eslint-disable-line no-console
      },
    },
  ],
};

export { ContentHubArticleListFixture };
